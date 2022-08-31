import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { ColumnLayout } from "../../components/layouts/ColumnLayout";
import { ButtonGenerator } from "../../components/ButtonGenerator";
import { ButtonGeneratorProps } from "../../components/ButtonGenerator/props";
import { TextArea } from "../../components/ui/TextArea";
import { FormGroup } from "../../components/ui/FormGroup";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";

const SAMPLE_TEXT = String.raw`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ipsum nunc, dictum eu finibus sit amet, laoreet et enim. Cras vel dui a magna venenatis hendrerit. Donec in nulla a nibh venenatis blandit vel ut dui. Vestibulum ac tortor a metus accumsan lobortis sit amet cursus sapien. Aenean risus nibh, tincidunt quis ligula id, finibus tincidunt dolor. Integer dolor nisl, ultricies elementum consectetur eu, eleifend eu est. Quisque convallis elementum odio sit amet scelerisque. Pellentesque quis euismod ante, eget tempor tortor. Proin sit amet ante pharetra, luctus nibh sed, ornare elit. Ut fringilla a felis et consequat. Proin scelerisque consectetur eros, in pretium nisl suscipit vitae. Cras sed luctus ante. Morbi felis enim, pulvinar sit amet tempor tempor, consectetur ut odio. Etiam condimentum purus ut justo pretium, ut dapibus lectus hendrerit. Phasellus hendrerit tellus non dictum dignissim.

Phasellus fringilla nulla diam, non condimentum erat blandit sed. Nulla ac tortor dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sit amet semper neque, sit amet accumsan libero. Duis gravida risus at odio vehicula, eu tempor enim malesuada. Donec eleifend sem vitae metus sagittis pulvinar. Aliquam dictum elementum magna ut laoreet. Aenean diam ante, sodales sit amet laoreet sed, dictum nec neque. Aenean quis pellentesque dui. Ut viverra urna velit, eu volutpat leo blandit non. Ut fermentum, erat ut gravida sodales, nisl lorem imperdiet mi, vitae egestas libero magna in est. Pellentesque a tellus pharetra, accumsan enim in, imperdiet magna.
`;

function countCharacters(s: string): number {
  return s.length;
}

function countWords(s: string): number {
  return s.split(" ").length;
}

function countSentences(s: string): number {
  return s.split(/[.!?]+\s/).filter(Boolean).length;
}

function countSpaces(s: string): number {
  return s.split(" ").length - 1;
}

type Result = {
  [key: string]: {
    label: string;
    value: number;
  };
};

const StringCounter: NextPage = () => {
  const [inputText, setInputText] = useState<string>(SAMPLE_TEXT);
  const [result, setResult] = useState<Result>({
    characters: {
      label: "Characters",
      value: countCharacters(inputText),
    },
    words: {
      label: "Words",
      value: countWords(inputText),
    },
    sentences: {
      label: "Sentences",
      value: countSentences(inputText),
    },
    spaces: {
      label: "Spaces",
      value: countSpaces(inputText),
    },
  });

  useEffect(() => {
    const newResult = Object.assign({}, result);
    newResult["characters"].value = countCharacters(inputText);
    newResult["words"].value = countWords(inputText);
    newResult["sentences"].value = countSentences(inputText);
    newResult["spaces"].value = countSpaces(inputText);

    setResult(newResult);
  }, [inputText, result]);

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

  return (
    <ColumnLayout>
      <div className="flex flex-col grow">
        <div className="flex flex-row justify-between">
          <ButtonGenerator {...inputButtonGeneratorProps} />
        </div>
        <TextArea
          placeholder="Your input..."
          value={inputText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
        />
      </div>
      <div className="flex">
        <div className="flex flex-row justify-between gap-2 grow">
          {Object.values(result).map((res) => (
            <FormGroup key={res.label}>
              <Label>{res.label}</Label>
              <Input value={res.value.toString()} withCopy={true} />
            </FormGroup>
          ))}
        </div>
      </div>
    </ColumnLayout>
  );
};

export default StringCounter;
