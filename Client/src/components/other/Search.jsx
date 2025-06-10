import React from "react";
import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
const sequence = [
  `Search "Bread"`,

  `Search "Milk"`,

  `Search "Rice"`,

  `Search "Cooking Oil"`,

  `Search "Sugar"`,

  `Search "Soap"`,

  `Search "Toothpaste"`,
];

const Search = () => {
  return (
    <div className="min-w-[250px] lg:min-w-[500px]">
      <div className="bg-[#eae9e9b7] rounded-2xl flex  gap-3 items-center h-12 p-2 border border-gray-300">
        <button className="flex items-center justify-center ">
          <IoSearch size={25} />
        </button>
        <div className=" w-full">
          <TypeAnimation
            sequence={sequence}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={10}
          />
        </div>
        {/* <input type="text" className="w-full  outline-none" /> */}
      </div>
    </div>
  );
};

export default Search;
