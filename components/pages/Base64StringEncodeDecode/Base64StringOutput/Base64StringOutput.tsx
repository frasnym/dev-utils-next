import type { NextPage } from "next";
import { CgCornerRightUp } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard } from "../../../../utils/string";
import { Button } from "../../../ui/Button";
import { Label } from "../../../ui/Label";
import { TextArea } from "../../../ui/TextArea";

interface Base64StringOutput {
  base64Output: string;
  setBase64Input: (base64Output: string) => void;
}

const Base64StringOutput: NextPage<Base64StringOutput> = ({
  setBase64Input,
  base64Output,
}) => {
  return (
    <div className="grow flex flex-col">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Label>Output:</Label>
          <Button onClick={() => copyToClipboard(base64Output)} color="light">
            <FaCopy className="inline-block" /> Copy
          </Button>
        </div>
        <Button onClick={() => setBase64Input(base64Output)} color="light">
          Use as Input <CgCornerRightUp className="inline-block" />
        </Button>
      </div>
      <TextArea placeholder="Your Base64 output..." value={base64Output} />
    </div>
  );
};

export default Base64StringOutput;
