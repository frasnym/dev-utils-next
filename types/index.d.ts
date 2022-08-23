import { ChangeEvent } from "react";

export type ButtonGeneratorSettings = {
  includeSample?: boolean;
  sampleText?: string;
  includeClear?: boolean;
  includeFromClipboard?: boolean;
  includeToClipboard?: boolean;
  includeUseAsInput?: boolean
};

export type ChangeInputFn = (inputText: string) => void;

export type SingleRadio = {
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label: string;
};