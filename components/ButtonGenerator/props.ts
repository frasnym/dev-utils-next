import { ChangeInputFn, ButtonGeneratorSettings } from "../../types";

export type ButtonGeneratorProps = {
  label: string,
  settings: ButtonGeneratorSettings;
  targetText: string;
  setTargetText: ChangeInputFn;
};