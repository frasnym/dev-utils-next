import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Emoji } from "react-component-utility";
import { FaSearch } from "react-icons/fa";
import { SiCurl } from "react-icons/si";
import { VscJson, VscSymbolString } from "react-icons/vsc";
import { Button } from "../../ui/Button";

// TODO: Responsive SideBar

const menuList = [
  {
    symbol: <Emoji symbol="⏱" />,
    text: "Unix Time Converter",
    href: "/tools/unix-time-converter",
  },
  {
    symbol: <VscJson />,
    text: "JSON Format/Validate",
    href: "/tools/json-format-validate",
  },
  {
    symbol: <VscJson />,
    text: "JSON Escape/Unescape",
    href: "/tools/json-escape-unescape",
  },
  {
    symbol: <VscSymbolString />,
    text: "Base64 String Encode/Decode",
    href: "/tools/base64-string-encode-decode",
  },
  {
    symbol: <SiCurl />,
    text: "URL Encode/Decode",
    href: "/tools/url-encode-decode",
  },
];

const SideBar: NextPage = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [filteredMenus, setFilteredMenus] = useState<
    {
      symbol: JSX.Element;
      text: string;
      href: string;
    }[]
  >(menuList);

  useEffect(() => {
    if (searchText.length > 0) {
      const temp = menuList.filter((m) => m.text.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredMenus(temp);
    } else {
      setFilteredMenus(menuList);
    }
  }, [searchText]);

  return (
    <div className="absolute flex-col justify-between hidden w-64 bg-gray-800 shadow sm:relative md:h-full sm:flex">
      <div className="p-5">
        <div className="flex justify-center w-full">
          <div className="relative mb-2">
            <div className="absolute inset-0 w-4 h-4 m-auto ml-4 text-gray-500">
              <FaSearch />
            </div>
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full py-2 pl-10 text-sm text-gray-500 bg-gray-100 rounded focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
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
