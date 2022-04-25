import type { NextPage } from "next";

interface LabelProps {
  children: React.ReactNode;
}

const Label: NextPage<LabelProps> = ({ children }) => {
  return (
    <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 px-2">
      {children}
    </label>
  );
};

export default Label;
