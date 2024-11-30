"use client";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  const getMenu = () => {};
  const hideMenu = () => {};
  return (
    <div className="fixed top-0 z-50" onClick={getMenu}>
      <FontAwesomeIcon
        icon={faBars}
        id="bar"
        className="text-black w-7 lg:hidden"
        onClick={() => setShow((prev) => !prev)}
      />
      <div
        id="menu"
        className={`fixed ${
          show ? "flex" : "hidden"
        } top-0 lg:w-screen  md:w-full bg-white ld:flex md:flex lg:flex-row md:flex-row flex-col justify-around py-5 px-10 `}
      >
        <FontAwesomeIcon
          icon={faX}
          className="w-7 text-black md:hidden"
          onClick={() => setShow((prev) => !prev)}
        />
        <div className="text-black">RWIGARA Rodrigue</div>
        <div className="flex md:flex-row flex-col gap-5 items-center">
          <Link href="/" className="text-black font-bold hover:text-gray-400">
            Home
          </Link>
          <Link
            href="#about"
            className="text-black font-bold hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-black font-bold hover:text-gray-400 active:text-red"
          >
            Skills
          </Link>
          <Link
            href="#portfolio"
            className="text-black font-bold hover:text-gray-400"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-white rounded-md bg-[#830664] p-2  font-bold hover:bg-[#830642]"
          >
            Contact 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
