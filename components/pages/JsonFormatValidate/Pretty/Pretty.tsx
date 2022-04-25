import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { copyToClipboard } from "../../../../utils/string";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";

interface PrettyProps {
  stringifiedJson: string;
}

const className =
  "p-2.5 w-full min-h-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const Pretty: NextPage<PrettyProps> = ({ stringifiedJson }) => {
  let json = stringifiedJson
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  json = json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let className = "text-red-500"; // number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          className = "text-gray-200"; // key
        } else {
          className = "text-green-300"; // string
        }
      } else if (/true|false/.test(match)) {
        className = "text-yellow-400"; // bool
      } else if (/null/.test(match)) {
        className = "text-blue-400"; // null
      }
      return `<span class='${className}'>${match}</span>`;
    }
  );

  return <pre dangerouslySetInnerHTML={{ __html: json }} />;
};

export default Pretty;
