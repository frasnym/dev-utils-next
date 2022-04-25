import type { NextPage } from "next";
import { ChangeEvent } from "react";
import { getTextFromClipboard } from "../../../../utils/string";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";
import { Label } from "../../../ui/Label";

interface UnixInputProps {
  setUnixInput: (txt: string) => void;
  unixInput: string;
}

const UnixInput: NextPage<UnixInputProps> = ({ setUnixInput, unixInput }) => {
  return (
    <div className="border-b-stone-400 border-b-2 pb-5">
      <div className="pb-3 flex flex-row items-center">
        <Label>Input:</Label>
        <Button
          onClick={() => setUnixInput(Date.now().toString())}
          color="light"
        >
          Now
        </Button>
        <Button onClick={() => setUnixInput("")} color="light">
          Clear
        </Button>
        <Button
          onClick={() => getTextFromClipboard(setUnixInput)}
          color="light"
        >
          Clipboard
        </Button>
      </div>
      <Input
        value={unixInput}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUnixInput(e.target.value)
        }
      />
    </div>
  );
};

export default UnixInput;
