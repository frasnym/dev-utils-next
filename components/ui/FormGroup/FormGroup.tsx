import type { NextPage } from "next";

interface FormGroupProps {
  children: React.ReactNode;
}

const FormGroup: NextPage<FormGroupProps> = ({ children }) => {
  return <div className="mb-6">{children}</div>;
};

export default FormGroup;
