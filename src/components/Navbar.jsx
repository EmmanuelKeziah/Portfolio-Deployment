import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1e293b] fixed w-full z-10 shadow-md px-4 py-3">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto text-white">
        <h1 className="text-2xl font-bold">Keziah</h1>

        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-[#14b8a6]">
            Home
          </a>
          <a href="#about" className="hover:text-[#14b8a6]">
            About
          </a>
          <a href="#projects" className="hover:text-[#14b8a6]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#14b8a6]">
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <IoCloseSharp size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1e293b] text-white space-y-3 px-4 py-4">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#14b8a6]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#14b8a6]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#14b8a6]"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-[#14b8a6]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
