import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdChevronRight, MdFavorite } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { SlRefresh } from "react-icons/sl";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import BasicTextField from "../BasicTextField";

type Props = {};

const links = ["Hotline +62 81223378021"];
const rightSection = [
  {
    name: "Compare products",
    icon: <SlRefresh />,
    path: "path",
  },
  {
    name: "Favourite Wishlist",
    icon: <MdFavorite />,
    path: "path",
  },
  {
    name: "Sign in",
    icon: <AiOutlineUser />,
    path: "path",
  },
];
const thirdHeader = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Our Store",
    path: "our-store",
  },
  {
    name: "Blogs",
    path: "blog",
  },
  {
    name: "Contact",
    path: "contact",
  },
];
const Header = (props: Props) => {
  return (
    <header className="bg-dark-accent-1 text-white ">
      <HeaderOne />
      <div className="border-b pb-1 border-slate-600" />
      <HeaderTwo />
      <HeaderThree />
    </header>
  );
};

export default Header;

const HeaderThree = () => {
  return (
    <div className="bg-dark-accent-2 px-3 md:px-0  py-2 flex justify-center ">
      <div className="container flex items-center   gap-x-5 ">
        <Menu className="flex items-center gap-x-2">
          <CgMenuGridO />
          <button className="text-sm w-[180px]   cursor-pointer relative   flex items-center justify-between ">
            <h1 className="whitespace-nowrap pointer-events-none ">
              {" "}
              Shop Categories
            </h1>
            <HiChevronDown />
          </button>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <div className="h-full w-[1px] bg-slate-100/60" />
        <ul className="flex items-center gap-x-2 text-xs ">
          {thirdHeader?.map((item, idx) => (
            <li key={idx}> {item.name} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HeaderOne = () => (
  <nav className="container text-xs pt-2 py-1 px-3 md:px-0 flex justify-between items-center  ">
    <h6 className="capitalize">Free Shippin over $100 & Free Returns</h6>
    <ul className="">
      {links?.map((item, idx) => (
        <li key={+idx}> {item} </li>
      ))}
    </ul>
  </nav>
);
const HeaderTwo = () => (
  <div className="container flex items-center  md:justify-between  py-4 gap-y-4 gap-x-3 flex-wrap px-3 md:px-0  ">
    <h1 className="font-semibold text-2xl ">Dev Corner</h1>
    <fieldset className="flex items-center w-full max-w-lg justify-between bg-white  rounded-md flex-1 ">
      <input
        type="text"
        placeholder="Search Product..."
        className="outline-none bg-transparent text-sm pl-2 flex-1 placeholder:text-sm text-dark "
      />
      <button
        type="button"
        className="bg-orange-accent-2 rounded-r-md   py-2 px-3"
      >
        <FiSearch className="text-dark" />
      </button>
    </fieldset>
    <ul className="flex items-center   gap-x-5">
      {rightSection?.map((item, idx) => (
        <li key={+idx} className="flex items-center gap-x-2">
          <span>{item.icon}</span>
          <span className="text-xs">
            <Link href={item.path}>{item.name}</Link>
          </span>
        </li>
      ))}
      <li className="flex items-center gap-x-2">
        <span>
          <AiOutlineShoppingCart />
        </span>
        <div className="text-xs">
          <p className="text-center bg-white rounded-xl w-fit px-1 mx-auto text-dark">
            0
          </p>
          $0.00
        </div>
      </li>
    </ul>
  </div>
);
