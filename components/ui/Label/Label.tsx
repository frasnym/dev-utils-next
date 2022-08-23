import type { NextPage } from "next";

type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

const Label: NextPage<LabelProps> = ({ children, className }) => {
  return (
    <label
      className={
        "block px-2 mb-2 text-lg font-medium text-gray-900 dark:text-gray-300 " + className
      }
    >
      {children}
    </label>
  );
};

export default Label;
