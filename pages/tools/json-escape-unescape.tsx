import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { FuncSelect } from "../../components/FuncSelect";
import { FuncSelectProps } from "../../components/FuncSelect/props";
import { ColumnLayout } from "../../components/layouts/ColumnLayout";
import { ButtonGenerator } from "../../components/ButtonGenerator";
import { ButtonGeneratorProps } from "../../components/ButtonGenerator/props";
import { TextArea } from "../../components/ui/TextArea";

const SAMPLE_TEXT = String.raw`{\"string\":\"this is a test string\"}`;
const funcNames = ["Unescape", "Escape"];

function escapeString(data: string) {
  return JSON.stringify(data);
}

function unescapeString(data: string) {
  return data.replace(/\\/g, "");
}

const Base64StringEncodeDecode: NextPage = () => {
  const [funcName, setFuncName] = useState<string>(funcNames[0].toLowerCase());
  const [jsonInput, setJsonInput] = useState<string>(SAMPLE_TEXT);
  const [jsonOutput, setJsonOutput] = useState<string>(escapeString(jsonInput));

  useEffect(() => {
    switch (funcName) {
      case funcNames[0].toLowerCase():
        setJsonOutput(unescapeString(jsonInput));
        return;
      case funcNames[1].toLowerCase():
        setJsonOutput(escapeString(jsonInput));
        return;
      default:
        return;
    }
  }, [funcName, jsonInput]);

  const inputButtonGeneratorProps: ButtonGeneratorProps = {
    label: "Input:",
    settings: {
      includeSample: true,
      sampleText: SAMPLE_TEXT,
      includeClear: true,
      includeFromClipboard: true,
    },
    targetText: jsonInput,
    setTargetText: setJsonInput,
  };

  const outputButtonGeneratorProps: ButtonGeneratorProps = {
    label: "Output:",
    settings: {
      includeToClipboard: true,
      includeUseAsInput: true,
    },
    targetText: jsonOutput,
    setTargetText: setJsonInput,
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
          placeholder="Your JSON input..."
          value={jsonInput}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setJsonInput(e.target.value)}
        />
      </div>
      <div className="flex flex-col grow">
        <div className="flex flex-row justify-between">
          <ButtonGenerator {...outputButtonGeneratorProps} />
        </div>
        <TextArea placeholder="Your JSON output..." value={jsonOutput} />
      </div>
    </ColumnLayout>
  );
};

export default Base64StringEncodeDecode;
