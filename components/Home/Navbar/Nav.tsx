"use client";
import { useEffect, useState } from "react";
import { navLinks } from "@/constant/constant"; // Ensure this export exists
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full transition-all duration-200 h-[12vh] z-[1000] ${
        navBg ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          <span className="text-3xl text-pink-700">A</span>ppfiy
        </h1>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks?.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-lg font-medium text-gray-700 hover:text-pink-700"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 transition-all duration-200">
            Join Now
          </button>
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer lg:hidden text-black" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
