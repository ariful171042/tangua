import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 h-[8rem] md:h-[10rem] sm:mt-5">
      <div className="container mx-auto  text-white grid grid-cols-3 justify-between px-5 py-2 md:p-10 sm:pt-7 gap-3 ">
        <div className="col-span-1">
          <h3 className="text-xl sm:text-2xl font-medium">
            টাঙ্গুয়ার ভাসমান বাড়ি
          </h3>
        </div>
        <div className=" flex justify-end gap-2 sm:gap-10 col-span-2 ">
          <Link href={"/"}>হোম</Link>
          <Link href={"/"}>সম্বন্ধে</Link>
          <Link href={"/gallery"}>ছবি ঘর</Link>
          <Link href={"/contact"}>যোগাযোগ</Link>
        </div>
      </div>
      <hr className=" md:mt-1" />

      <div>
        <p className="text-center mt-3 mb-2  text-gray-300">
          &copy;{new Date().getFullYear()} টাঙ্গুয়ার ভাসমান বাড়ি | All rights
          reserve
        </p>
      </div>
    </div>
  );
};

export default Footer;
