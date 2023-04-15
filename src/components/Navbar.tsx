import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  };

  updateTime();

  return (
    <div className="flex justify-between max-w-7xl h-24 items-center mx-auto px-5 text-white">
      <h1 className="logo-app items-center">
        React.
        <span className="text-white font-medium text-sm cursor-default ms-5">
          {time.toLocaleTimeString()}
        </span>
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <a
            href="#"
            className="inline-block duration-500 ease-in-out hover:scale-110"
          >
            Home
          </a>
        </li>
        <li className="p-4">
          <a
            href="#"
            className="inline-block duration-500 ease-in-out hover:scale-110"
          >
            Company
          </a>
        </li>
        <li className="p-4">
          <a
            href="#"
            className="inline-block duration-500 ease-in-out hover:scale-110"
          >
            Resources
          </a>
        </li>
        <li className="p-4">
          <a
            href="#"
            className="inline-block duration-500 ease-in-out hover:scale-110"
          >
            About
          </a>
        </li>
        <li className="p-4">
          <a
            href="#"
            className="inline-block duration-500 ease-in-out hover:scale-110"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* left bar small screen */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 bg-gray-900 h-full w-[60%] border-r border-r-gray-800 ease-in-out duration-500 md:hidden"
            : "fixed top-0 left-[-100%] h-full w-[60%] ease-in-out duration-500 md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-uppercase text-[#00df9a] ms-6 mt-10">
          React.
        </h1>
        <ul className="pt-10 px-6 uppercase divide-y divide-slate-600">
          <li className="p-4">
            <a
              href="#"
              className="relative transition-all duration-500 left-0 ease-in-out hover:left-[1rem]"
            >
              Home
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="relative transition-all duration-500 left-0 ease-in-out hover:left-[1rem]"
            >
              Company
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="relative transition-all duration-500 left-0 ease-in-out hover:left-[1rem]"
            >
              Resources
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="relative transition-all duration-500 left-0 ease-in-out hover:left-[1rem]"
            >
              About
            </a>
          </li>
          <li className="p-4">
            <a
              href="#"
              className="relative transition-all duration-500 left-0 ease-in-out hover:left-[1rem]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
