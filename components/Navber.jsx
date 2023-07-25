import Link from "next/link";
import React from "react";

const Navber = () => {
  return (
    <nav className="bg-gray-500/20 text-white h-[10vh] absolute w-full z-50 p-4 sm:p-0 ">
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
        </div>
      </div>
    </nav>
  );
};

export default Navber;
