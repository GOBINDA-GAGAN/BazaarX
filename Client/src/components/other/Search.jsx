import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { IoMdArrowRoundBack } from "react-icons/io";

const sequence = [
  `Search "Bread"`,
  2000,
  `Search "Milk"`,
  2000,
  `Search "Rice"`,
  2000,
  `Search "Cooking Oil"`,
  2000,
  `Search "Sugar"`,
  2000,
  `Search "Soap"`,
  2000,
  `Search "Toothpaste"`,
];

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchPage, setIsSearchPage] = useState(false);

  useEffect(() => {
    const isSearch = location.pathname === "/search";
    setIsSearchPage(isSearch);
  }, [location]);

  const redirectToSearchPage = () => {
    navigate("/search");
  };
  return (
    <div className="min-w-[250px] lg:min-w-[500px]  cursor-text group">
      <div
        onClick={redirectToSearchPage}
        className={`bg-[#eae9e9b7] rounded-2xl flex gap-3 items-center h-12 p-2 border-2 
  ${isSearchPage ? "border-yellow-300" : "border-gray-300"}`}
      >
        <button className="flex items-center justify-center ">
          {isSearchPage ? (
            <IoMdArrowRoundBack size={25} />
          ) : (
            <IoSearch size={25} />
          )}
        </button>

        {isSearchPage ? (
          <input
            type="text"
            className="w-full  outline-none"
            autoFocus
            placeholder="Search your item..."
          />
        ) : (
          <div className=" w-full">
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              cursor={true}
              s
              repeat={Infinity}
              speed={10}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
