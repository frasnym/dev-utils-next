import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Base64StringInput } from "../../components/pages/Base64StringEncodeDecode/Base64StringInput";
import { Base64StringOutput } from "../../components/pages/Base64StringEncodeDecode/Base64StringOutput";

const SAMPLE_TEXT = "This is sample text.";

function encodeBase64(data: string) {
  return Buffer.from(data).toString("base64");
}

function decodeBase64(data: string) {
  return Buffer.from(data, "base64").toString("ascii");
}

const Base64StringEncodeDecode: NextPage = () => {
  const [base64Input, setBase64Input] = useState<string>(SAMPLE_TEXT);
  const [isEncode, setIsEncode] = useState<boolean>(true);
  const [base64Output, setBase64Output] = useState<string>(
    encodeBase64(base64Input)
  );

  useEffect(() => {
    setBase64Output(
      isEncode ? encodeBase64(base64Input) : decodeBase64(base64Input)
    );
  }, [base64Input, isEncode]);

  const base64StringInputProps = {
    sampleInput: SAMPLE_TEXT,
    base64Input,
    setBase64Input,
    isEncode,
    setIsEncode,
  };

  return (
    <div className="flex flex-col gap-2 h-full w-full">
      <Base64StringInput {...base64StringInputProps} />
      <Base64StringOutput
        base64Output={base64Output}
        setBase64Input={setBase64Input}
      />
    </div>
  );
};

export default Base64StringEncodeDecode;
