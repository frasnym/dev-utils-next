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
        <label
          key={radio.value}
          htmlFor={radio.value}
          className="flex cursor-pointer rounded-lg px-5 py-2.5 text-sm m-2 focus:z-10 focus:ring-4 focus:outline-none text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <input
            type="radio"
            checked={radio.isChecked}
            value={radio.value}
            id={radio.value}
            name={props.name}
            onChange={radio.onChange}
          />
          <span className="pl-2">{radio.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
