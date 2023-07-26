"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navber = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-gray-500 h-[10vh]  w-full  p-4 sm:p-0 z-[999] border-b border-gray-300 shadow-md">
      <div className="container mx-auto w-full h-full md:p-10">
        <div className="w-full h-full flex justify-between items-center">
          <div className="left">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-md font-semibold 2xl:text-4xl">
              টাঙ্গুয়ার ভাসমান বাড়ি
            </h3>
          </div>
          <div className="right sm:flex gap-5 hidden md:text-xl 2xl:text-2xl">
            <Link href={"/"} className="hover:text-orange-500">
              হোম
            </Link>
            <Link href={"/"} className="hover:text-orange-500">
              সম্বন্ধে
            </Link>
            <Link href={"/gallery"} className="hover:text-orange-500">
              ছবি ঘর
            </Link>
            <Link href={"/contact"} className="hover:text-orange-500">
              যোগাযোগ
            </Link>
          </div>
          {/* hamburger button */}
          <div className=" -mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center focus:outline-none  text-gray-600 p-2 z-[999] text-2xl "
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes className="text-white" /> : <FaBars />}
            </button>
          </div>
        </div>
        <div>
          {open ? (
            <div className="md:hidden">
              <div
                onClick={handleOpen}
                className={`w-screen h-screen fixed z-[900] bg-black/50 backdrop-blur-lg top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                  setOpen ? `` : "hidden"
                }`}
              >
                <div>
                  <div className="flex flex-col gap-5 items-center mb-10 text-2xl">
                    <Link
                      href="/"
                      className="hover:text-white transition-color"
                    >
                      হোম
                    </Link>
                    <Link
                      href="/about"
                      className="hover:text-white transition-color"
                    >
                      সম্বন্ধে
                    </Link>

                    <Link
                      href="/gallery"
                      className="hover:text-white transition-color"
                    >
                      ছবি ঘর
                    </Link>
                    <Link
                      href="/contact"
                      className="hover:text-white transition-color"
                    >
                      যোগাযোগ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Navber;
