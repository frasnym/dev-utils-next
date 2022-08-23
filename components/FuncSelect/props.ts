import { ChangeInputFn } from "../../types";

export type FuncSelectProps = {
  values: string[];
  currentFuncName: string;
  setFuncName: ChangeInputFn;
};