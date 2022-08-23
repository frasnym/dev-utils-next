import type { NextPage } from "next";

type Props = {
  children: React.ReactNode;
};

const ColumnLayout: NextPage<Props> = ({ children }) => {
  return <div className="flex flex-col w-full h-full gap-2">{children}</div>;
};

export default ColumnLayout;
