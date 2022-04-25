import type { ChangeEvent } from "react";
import type { NextPage } from "next";
import { FaRegCopy } from "react-icons/fa";
import { copyToClipboard } from "../../../utils/string";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  withCopy?: boolean;
}

const Input: NextPage<InputProps> = (props) => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        readOnly={!props.onChange}
      />
      {props.withCopy && (
        <button
          className="flex absolute inset-y-0 right-0 items-center pr-3"
          onClick={() => copyToClipboard(props.value)}
        >
          <FaRegCopy className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default Input;
