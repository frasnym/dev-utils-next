import type { NextPage } from "next";
import { CgCornerRightUp } from "react-icons/cg";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard, getTextFromClipboard } from "../../utils/string";
import { Button } from "../ui/Button";
import { Label } from "../ui/Label";
import { ButtonGeneratorProps } from "./props";

function generateInputButtons(props: ButtonGeneratorProps) {
  const resultMap: {
    key: string;
    onClick: () => void;
    children: JSX.Element;
  }[] = [];

  if (props.settings.includeSample) {
    resultMap.push({
      key: "sampleBtn",
      onClick: () =>
        props.setTargetText(props.settings.sampleText ? props.settings.sampleText : ""),
      children: <span>Sample</span>,
    });
  }

  if (props.settings.includeClear) {
    resultMap.push({
      key: "clearBtn",
      onClick: () => props.setTargetText(""),
      children: <span>Clear</span>,
    });
  }

  if (props.settings.includeFromClipboard) {
    resultMap.push({
      key: "fromClipboardBtn",
      onClick: () => getTextFromClipboard(props.setTargetText),
      children: <span>Paste from Clipboard</span>,
    });
  }

  if (props.settings.includeToClipboard) {
    resultMap.push({
      key: "toClipboardBtn",
      onClick: () => copyToClipboard(props.targetText),
      children: (
        <span>
          <FaCopy className="inline-block" /> Copy to Clipboard
        </span>
      ),
    });
  }

  if (props.settings.includeUseAsInput) {
    resultMap.push({
      key: "toClipboardBtn",
      onClick: () => props.setTargetText(props.targetText),
      children: (
        <span>
          Use as Input <CgCornerRightUp className="inline-block" />
        </span>
      ),
    });
  }

  return resultMap.map((res) => (
    <Button key={res.key} onClick={res.onClick} color="light">
      {res.children}
    </Button>
  ));
}

const ButtonGenerator: NextPage<ButtonGeneratorProps> = (props) => {
  return (
    <div className="flex flex-row items-center">
      <Label className="mb-0">{props.label}</Label>
      {generateInputButtons(props)}
    </div>
  );
};

export default ButtonGenerator;
