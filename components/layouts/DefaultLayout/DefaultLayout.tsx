import type { NextPage } from "next";
import { SideBar } from "../SideBar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: NextPage<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-no-wrap h-screen">
      <SideBar />
      <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
        <div className="w-full h-full code-preview rounded-xl bg-gradient-to-r bg-white  border border-gray-200 dark:border-gray-700 p-2 sm:p-6 dark:bg-gray-800">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
