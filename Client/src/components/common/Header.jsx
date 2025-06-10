import React from "react";
import Search from "../other/Search";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";

const Header = () => {
  return (
    <header className="lg:h-20 h-28 lg:shadow-md sticky   top-0 text-mytext py-2 bg-[#F8F8F8]">
      <div className=" md:w-11/12 mx-auto">
        <div className="flex items-center justify-between md:p-4 p-1 ">
          <div className="flex items-center gap-10">
            {/*logo*/}
            <div className="">
              <Link to="/">
                <div className="flex md:text-4xl text-2xl group cursor-pointer transition-all ">
                  <h1 className="group-hover:text-yellow-400">Bazaar</h1>
                  <span className=" group-hover:text-black text-yellow-400">
                    X
                  </span>
                </div>
              </Link>
            </div>
            {/*location*/}
            <div className="cursor-pointer px-2 hidden">
              <h3 className="text-black font-bold text-xl">
                Delivery in 10 minutes
              </h3>
              <span>PS 1-2 Patparganj I.P. Extension.....</span>
            </div>
          </div>

          {/*search*/}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/*login and my cart*/}

          <div className="flex">
            <div className="block lg:hidden ">
              <button>
                <LiaUserCircleSolid size={35} />
              </button>
            </div>

            <div className="hidden lg:block ">
              <div className="flex items-center gap-6 ">
                <button className=" px-3 py-3  border border-gray-200 font-semibold  rounded-2xl cursor-pointer">
                  Login
                </button>
                <button className=" font-semibold px-3 py-3 border  gap-2  rounded-2xl cursor-pointer flex items-center bg-green-600 text-white">
                  <CiShoppingCart size={25} />
                  <span>My Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" container mx-auto px-5 lg:hidden ">
        <Search />
      </div>
    </header>
  );
};

export default Header;
