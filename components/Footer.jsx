"use client";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 h-[8rem] md:h-[10rem] sm:mt-5">
      <div className="container mx-auto  flex justify-between items-center ">
        <div className="text-gray-800 px-5 py-2 md: sm:pt-7 gap-3 flex flex-col">
          <div className="">
            <h3 className="text-lg sm:text-2xl font-medium xl:text-4xl ">
              টাঙ্গুয়ার ভাসমান বাড়ি
            </h3>
          </div>
          <div className=" flex  gap-2 sm:gap-5  xl:text-xl">
            <Link href={"/"}>হোম</Link>
            <Link href={"/"}>সম্বন্ধে</Link>
            <Link href={"/gallery"}>ছবি ঘর</Link>
            <Link href={"/contact"}>যোগাযোগ</Link>
          </div>
        </div>
        <div className="social-media flex gap-5 text-4xl text-gray-800">
          <Link href="/">
            <BsFacebook />
          </Link>
          <Link href={"/"}>
            <BsInstagram />
          </Link>
          <Link href={"/"}>
            <BsYoutube />
          </Link>
          <Link href={"/"}>
            <BsTwitter />
          </Link>
        </div>
      </div>
      <hr className=" md:mt-" />

      <div>
        <p className="text-center mt-2 mb-2  text-gray-800 lg:text-xl">
          &copy;{new Date().getFullYear()} টাঙ্গুয়ার ভাসমান বাড়ি | All rights
          reserve
        </p>
      </div>
    </div>
  );
};

export default Footer;
