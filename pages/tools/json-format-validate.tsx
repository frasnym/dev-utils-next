import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/Label";
import { Pretty } from "../../components/pages/JsonFormatValidate/Pretty";
import { TextArea } from "../../components/ui/TextArea";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard } from "../../utils/string";

// Check https://github.com/mac-s-g/react-json-view/blob/master/package.json

const SAMPLE_JSON = `{"string":"this is a test string","integer":42,"array":[1,2,3,"test",null],"float":3.14159,"object":{"first-child":true,"second-child":false,"last-child":null},"string_number":"1234","date":"2022-04-25T08:27:12.007Z"}`;

const JsonFormatValidate: NextPage = () => {
  const [jsonInput, setJsonInput] = useState<string>(SAMPLE_JSON);

  let stringifiedJson: string;
  let output;
  try {
    stringifiedJson = JSON.stringify(JSON.parse(jsonInput), undefined, 2);
    output = <Pretty stringifiedJson={stringifiedJson} />;
  } catch (error) {
    output = <span>Unable to parse json</span>;
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex flex-row items-center gap-5">
        <div className="grow basis-0 flex flex-row items-center">
          <Label>Input:</Label>
          <Button onClick={() => setJsonInput(SAMPLE_JSON)} color="light">
            Sample
          </Button>
          <Button onClick={() => setJsonInput("")} color="light">
            Clear
          </Button>
        </div>
        <div className="grow basis-0 flex flex-row items-center">
          <Label>Output:</Label>
          <Button
            onClick={() => copyToClipboard(stringifiedJson)}
            color="light"
          >
            <FaCopy className="inline-block" /> Copy
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-5 text-xs h-full overflow-y-auto">
        <div className="grow basis-0">
          <TextArea
            placeholder="Your JSON input..."
            value={jsonInput}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setJsonInput(e.target.value)
            }
          />
        </div>
        <div className="grow basis-0 overflow-y-auto text-white">
          <div className="p-2.5 w-full min-h-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {output}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsonFormatValidate;
