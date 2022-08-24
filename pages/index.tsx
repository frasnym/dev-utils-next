import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchInput } from "../components/ui/SearchInput";
import { Tool } from "../types";
import { TOOLS_AVAILABLE } from "../utils/constant";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [filteredTools, setFilteredTools] = useState<Tool[]>(TOOLS_AVAILABLE);

  useEffect(() => {
    if (input.length > 0) {
      const temp = TOOLS_AVAILABLE.filter((m) =>
        m.text.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredTools(temp);
    } else {
      setFilteredTools(TOOLS_AVAILABLE);
    }
  }, [input]);

  const toolsBtnEl = filteredTools.map((menu) => (
    <Link key={menu.text} href={menu.href}>
      <a className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {menu.text}
        </span>
      </a>
    </Link>
  ));

  return (
    <div className="flex flex-col items-center justify-center w-full h-full text-white">
      <h1 className="text-5xl font-extrabold mb-7">All in one helper tools for developer</h1>
      <div className="mb-5 text-center">
        <h3 className="mb-2 text-2xl font-semibold">Start here</h3>
        <SearchInput value={input} onChange={setInput} />
      </div>
      <div>{toolsBtnEl}</div>
    </div>
  );
};

export default Home;
