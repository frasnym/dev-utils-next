import type { NextPage } from "next";
import { SingleRadio } from "../../types";
import { RadioButton } from "../ui/RadioButton";
import { FuncSelectProps } from "./props";

function generateRadios(fsp: FuncSelectProps): SingleRadio[] {
  const result = fsp.values.map((val) => {
    const sr: SingleRadio = {
      isChecked: val.toLowerCase() === fsp.currentFuncName.toLowerCase(),
      label: val,
      onChange: (e) => fsp.setFuncName(val.toLowerCase()),
      value: val.toLowerCase(),
    };

    return sr;
  });

  return result;
}

// TODO: Update func name selection, using radio button to hard to click
const FuncSelect: NextPage<FuncSelectProps> = (props) => {
  if (props.values.length <= 0) return <></>;

  const name = props.values.join("-");
  return <RadioButton name={name} radios={generateRadios(props)} />;
};

export default FuncSelect;
