import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Emoji } from "react-component-utility";
import { Tool } from "../../../types";
import { TOOLS_AVAILABLE } from "../../../utils/constant";
import { Button } from "../../ui/Button";
import { SearchInput } from "../../ui/SearchInput";

// TODO: Responsive SideBar

const SideBar: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredMenus, setFilteredMenus] = useState<Tool[]>(TOOLS_AVAILABLE);

  useEffect(() => {
    if (searchText.length > 0) {
      const temp = TOOLS_AVAILABLE.filter((m) =>
        m.text.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredMenus(temp);
    } else {
      setFilteredMenus(TOOLS_AVAILABLE);
    }
  }, [searchText]);

  return (
    <div className="absolute flex-col justify-between hidden w-64 bg-gray-800 shadow sm:relative md:h-full sm:flex">
      <div className="p-5">
        <div className="flex justify-center w-full mb-2">
          <SearchInput value={searchText} onChange={setSearchText} />
        </div>
        <ul className="space-y-2">
          {filteredMenus.map((menu) => (
            <li key={menu.text}>
              <Link href={menu.href}>
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {menu.symbol}
                  <span className="ml-3">{menu.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="px-5 py-2 border-t border-gray-700">
        <ul className="flex justify-center w-full bg-gray-800">
          <li>
            <a href="https://linktr.ee/frasnym" target="_blank" rel="noreferrer">
              <Button onClick={() => {}} color="light" size="xs">
                <Emoji symbol="💝" /> Support
              </Button>
            </a>
          </li>
          <li>
            <a href="mailto:frastyawan.nym@gmail.com" target="_blank" rel="noreferrer">
              <Button onClick={() => {}} color="light" size="xs">
                <Emoji symbol="📫" /> Feedback
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
