import Image from "next/image";
import React from "react";
import Overlay from "./Overlay";

const HeroSection = () => {
  return (
    <div className=" w-[100vw] sm:h-[90vh] h-[50vh] relative overflow-hidden">
      <Image
        src={
          "https://res.cloudinary.com/dxitnm55j/image/upload/v1689488073/tanguya/pexels-pixabay-261516_kuiwgr.jpg"
        }
        alt="hero image"
        width={1920}
        height={1080}
        className=" w-full h-full"
        priority
      />
      <Overlay className="fixed" />
      <div className="absolute z-10  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 justify-center items-center text-white">
        <h1 className="sm:text-4xl text-2xl font-medium ">
          টাঙ্গুয়ার ভাসমান বাড়ি
        </h1>
        <p className="text-center text-sm">
          ফ্লোটিং হাউস অফ টাঙ্গুয়া-এর লক্ষ্য হল ভ্রমণকারীদের জন্য একটি অনন্য
          এবং আনন্দদায়ক অবকাশের অভিজ্ঞতা প্রদান করা যারা টাঙ্গুয়ার হাওর
          অন্বেষণ করতে চান এবং একটি বাড়ির সমস্ত আরাম থাকা অবস্থায় প্রকৃতির
          সৌন্দর্য উপভোগ করতে চান।
        </p>
        <button className="bg-yellow-400 text-gray-700 p-2 rounded-md">
          আরও জানুন
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
