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
    <div className="fixed top-0" onClick={getMenu}>
      <FontAwesomeIcon
        icon={faBars}
        id="bar"
        className="text-white w-7 lg:hidden"
        onClick={() => setShow((prev) => !prev)}
      />
      <div
        id="menu"
        className={`fixed ${
          show ? "flex" : "hidden"
        } top-0 lg:w-screen  md:w-full bg-black ld:flex md:flex lg:flex-row md:flex-row flex-col justify-between py-5 px-10 `}
      >
        <FontAwesomeIcon
          icon={faX}
          className="w-7 text-white md:hidden"
          onClick={() => setShow((prev) => !prev)}
        />
        <div className="text-white">RWIGARA Rodrigue</div>
        <div className="flex md:flex-row flex-col gap-5">
          <Link href="/" className="text-white font-bold hover:text-gray-400">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-bold hover:text-gray-400"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-white font-bold hover:text-gray-400"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="text-white font-bold hover:text-gray-400"
          >
            Experience
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
