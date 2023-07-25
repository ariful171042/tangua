"use client";
import React, { useEffect } from "react";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import Image from "next/image";

const Gallery = () => {
  useEffect(() => {
    initLightboxJS("Insert License key", "Insert plan type here");
  });

  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836595/29025224162_08809faa59_k_tdgidx.jpg",
      alt: "Mechanical keyboard with white keycaps.",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836595/28272965924_b0a9f97d56_k_e7biet.jpg",
      alt: "Mechanical keyboard with white, pastel green and red keycaps.",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836595/28312344353_67f1487370_k_g0xycf.jpg",
      alt: "Mechanical keyboard with white, pastel pink, yellow and red keycaps.",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836594/29001377765_67bab68689_k_1_hqvuhz.jpg",
      alt: "",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836594/25601934551_762a67a360_k_gwicbq.jpg",
      alt: "",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836594/13981193549_06c23051a3_k_u4aeqe.jpg",
      alt: "",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836594/3103707123_a85a4920b5_h_lv0tev.jpg",
      alt: "",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836593/30590270474_c3240a2730_k_hwo0aj.jpg",
      alt: "",
    },
    {
      id: 9,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836593/28286348303_38ae3a3cb8_k_lk3vra.jpg",
      alt: "",
    },
    {
      id: 10,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689836593/25981668776_3c3285256a_k_asmwyt.jpg",
      alt: "",
    },
    {
      id: 11,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689495965/tanguya/pexels-pixabay-261516_gyoq0z.jpg",
      alt: "",
    },
    {
      id: 12,
      src: "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583626/tanguya/64ad5fa09ded3_1686320567378-01_w22pdk.jpg",
      alt: "",
    },
  ];

  return (
    <div className=" container mx-auto mt-0 px-5 mb-5 sm:p-0 md:px-10 lg:pt-5 xl:pt-12">
      <h2 className=" mb-5 text-4xl 2xl:text-5xl font-semibold">
        টাঙ্গুয়ার হাওর ভ্রমণ ফটোগ্যালারি
      </h2>

      <SlideshowLightbox
        lightboxIdentifier="lightbox"
        framework="next"
        images={images}
        showThumbnails={true}
        theme="lightbox"
      >
        <div className=" grid grid-cols-3 justify-between gap-1 sm:gap-5 ">
          {images.map((image) => (
            <div
              key={image.id}
              className=" w-full h-[3.5rem] md:h-[8rem] lg:h-[12rem] xl:h-[15rem] 2xl:h-[18rem] overflow-hidden rounded-lg hover:scale-105 duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                height={500}
                width={500}
                data-lightboxjs="lightbox"
                quality={80}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </SlideshowLightbox>
    </div>
  );
};

export default Gallery;
