import { Emoji } from "react-component-utility";
import { SiCurl } from "react-icons/si";
import { VscJson, VscSymbolString } from "react-icons/vsc";
import { IoText } from "react-icons/io5";
import { Tool } from "../types";

export const TOOLS_AVAILABLE: Tool[] = [
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
  {
    symbol: <IoText />,
    text: "String Counter",
    href: "/tools/string-counter",
  },
];
