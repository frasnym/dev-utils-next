import type { NextPage } from "next";
import { FaSearch } from "react-icons/fa";
import { ChangeInputFn } from "../../../types";

type SearchInputProps = {
  value: string;
  onChange: ChangeInputFn;
};

const SearchInput: NextPage<SearchInputProps> = (props) => {
  return (
    <section className="relative">
      <div className="absolute inset-0 w-4 h-4 m-auto ml-4 text-gray-500">
        <FaSearch />
      </div>
      <input
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        className="w-full py-2 pl-10 text-sm text-gray-500 bg-gray-100 rounded focus:outline-none"
        type="search"
        placeholder="Search tools"
      />
    </section>
  );
};

export default SearchInput;
