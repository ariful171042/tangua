import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 h-[13rem] mt-5">
      <div className="container mx-auto  text-white grid grid-cols-3 justify-between pt-7 gap-3 ">
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">টাঙ্গুয়ার ভাসমান বাড়ি</h3>
          <p className="text-[0.6rem] mt-2 w-48">
            ফ্লোটিং হাউস অফ টাঙ্গুয়া-এর লক্ষ্য হল ভ্রমণকারীদের জন্য একটি অনন্য
            এবং আনন্দদায়ক অবকাশের অভিজ্ঞতা প্রদান করা যারা টাঙ্গুয়ার হাওর
            অন্বেষণ করতে চান এবং একটি বাড়ির সমস্ত আরাম থাকা অবস্থায় প্রকৃতির
            সৌন্দর্য উপভোগ করতে চান।
          </p>
        </div>

        <div className=" flex gap-10 col-span-1 ">
          <Link href={"/"}>হোম</Link>
          <Link href={"/"}>সম্বন্ধে</Link>
          <Link href={"/gallery"}>ছবি ঘর</Link>
          <Link href={"/contact"}>যোগাযোগ</Link>
        </div>
        <div className="col-span-1 "></div>
      </div>
      <hr className="mt-5" />

      <div>
        <p className="text-center mt-3  text-gray-300">
          &copy;{new Date().getFullYear()} টাঙ্গুয়ার ভাসমান বাড়ি | All rights
          reserve
        </p>
      </div>
    </div>
  );
};

export default Footer;
