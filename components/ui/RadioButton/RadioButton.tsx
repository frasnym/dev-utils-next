import type { NextPage } from "next";
import { SingleRadio } from "../../../types";

interface RadioButtonProps {
  name: string;
  radios: SingleRadio[];
}

// Ref: https://flowbite.com/docs/forms/radio/

const RadioButton: NextPage<RadioButtonProps> = (props) => {
  return (
    <div className="flex">
      {props.radios.map((radio) => (
        <div key={radio.value} className="flex items-center mr-4">
          <input
            checked={radio.isChecked}
            type="radio"
            value={radio.value}
            name={props.name}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={radio.onChange}
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {radio.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
