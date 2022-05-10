import type { NextPage } from "next";
import { ChangeEvent } from "react";
import { getTextFromClipboard } from "../../../../utils/string";
import { Button } from "../../../ui/Button";
import { Label } from "../../../ui/Label";
import { RadioButton } from "../../../ui/RadioButton";
import { TextArea } from "../../../ui/TextArea";

interface Base64StringInputProps {
  sampleInput: string;
  base64Input: string;
  setBase64Input: (base64Input: string) => void;
  isEncode: boolean;
  setIsEncode: (isEncode: boolean) => void;
}

const Base64StringInput: NextPage<Base64StringInputProps> = (props) => {
  const { setBase64Input, base64Input, sampleInput, isEncode, setIsEncode } =
    props;

  return (
    <div className="grow flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Label>Input:</Label>
          <Button onClick={() => setBase64Input(sampleInput)} color="light">
            Sample
          </Button>
          <Button onClick={() => setBase64Input("")} color="light">
            Clear
          </Button>
          <Button
            onClick={() => getTextFromClipboard(setBase64Input)}
            color="light"
          >
            Clipboard
          </Button>
        </div>
        <RadioButton
          name="encode-decode-group"
          radios={[
            {
              isChecked: isEncode,
              label: "Encode",
              value: "true",
              onChange: (e) => setIsEncode(e.target.value === "true"),
            },
            {
              isChecked: !isEncode,
              label: "Decode",
              value: "false",
              onChange: (e) => setIsEncode(e.target.value === "true"),
            },
          ]}
        />
      </div>
      <TextArea
        placeholder="Your Base64 input..."
        value={base64Input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setBase64Input(e.target.value)
        }
      />
    </div>
  );
};

export default Base64StringInput;
