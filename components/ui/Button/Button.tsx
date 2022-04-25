import type { NextPage } from "next";

interface ButtonProps {
  className?: string;
  color?: string;
  size?: string;
  children: React.ReactNode;
  onClick: () => void;
}

// Ref: https://flowbite.com/docs/components/buttons/

const Button: NextPage<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`rounded-lg ${generateButtonSizeCss(
        props.size || "base"
      )} focus:z-10 focus:ring-4 focus:outline-none ${generateButtonColorCss(
        props.color || "default"
      )} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

function generateButtonSizeCss(size: string): string {
  switch (size) {
    case "xs":
      return "px-3 py-2 text-xs m-1";
    case "sm":
      return "px-3 py-2 text-sm m-1";
    case "base":
      return "px-5 py-2.5 text-sm m-2";
    case "lg":
      return "px-5 py-3 text-base";
    case "xl":
      return "px-6 py-3.5 text-base";
    default:
      return "px-5 py-2.5 text-sm";
  }
}

function generateButtonColorCss(color: string): string {
  switch (color) {
    case "default":
      return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    case "alternative":
      return "text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";
    case "dark":
      return "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700";
    case "light":
      return "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700";
    case "green":
      return "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
    case "red":
      return "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
    case "yellow":
      return "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900";
    case "purple":
      return "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900";
    default:
      return "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
}

export default Button;
