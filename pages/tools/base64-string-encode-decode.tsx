import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { FuncSelect } from "../../components/FuncSelect";
import { FuncSelectProps } from "../../components/FuncSelect/props";
import { ColumnLayout } from "../../components/layouts/ColumnLayout";
import { ButtonGenerator } from "../../components/ButtonGenerator";
import { ButtonGeneratorProps } from "../../components/ButtonGenerator/props";
import { TextArea } from "../../components/ui/TextArea";

const SAMPLE_TEXT = String.raw`This is sample text.`;
const funcNames = ["Encode", "Decode"];

function encodeBase64(data: string) {
  return Buffer.from(data).toString("base64");
}

function decodeBase64(data: string) {
  return Buffer.from(data, "base64").toString("ascii");
}

const Base64StringEncodeDecode: NextPage = () => {
  const [funcName, setFuncName] = useState<string>(funcNames[0].toLowerCase());
  const [inputText, setInputText] = useState<string>(SAMPLE_TEXT);
  const [outputText, setOutputText] = useState<string>(encodeBase64(inputText));

  useEffect(() => {
    switch (funcName) {
      case funcNames[0].toLowerCase():
        setOutputText(encodeBase64(inputText));
        return;
      case funcNames[1].toLowerCase():
        setOutputText(decodeBase64(inputText));
        return;
      default:
        return;
    }
  }, [funcName, inputText]);

  const inputButtonGeneratorProps: ButtonGeneratorProps = {
    label: "Input:",
    settings: {
      includeSample: true,
      sampleText: SAMPLE_TEXT,
      includeClear: true,
      includeFromClipboard: true,
    },
    targetText: inputText,
    setTargetText: setInputText,
  };

  const outputButtonGeneratorProps: ButtonGeneratorProps = {
    label: "Output:",
    settings: {
      includeToClipboard: true,
      includeUseAsInput: true,
    },
    targetText: outputText,
    setTargetText: setInputText,
  };

  const funcSelectProps: FuncSelectProps = {
    currentFuncName: funcName,
    setFuncName,
    values: funcNames,
  };

  return (
    <ColumnLayout>
      <div className="flex flex-col grow">
        <div className="flex flex-row justify-between">
          <ButtonGenerator {...inputButtonGeneratorProps} />
          <FuncSelect {...funcSelectProps} />
        </div>
        <TextArea
          placeholder="Your input..."
          value={inputText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
        />
      </div>
      <div className="flex flex-col grow">
        <div className="flex flex-row justify-between">
          <ButtonGenerator {...outputButtonGeneratorProps} />
        </div>
        <TextArea placeholder="Your output..." value={outputText} />
      </div>
    </ColumnLayout>
  );
};

export default Base64StringEncodeDecode;
