import Image from "next/image";
import Overlay from "./Overlay";

const data = [
  {
    id: "1",
    title: "লক দরজা ভাল সজ্জিত কেবিন",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689573425/pexels-gioele-fazzeri-14911334_xkv7yn.jpg",
    alt: "লক দরজা ভাল সজ্জিত কেবিন.",
  },
  {
    id: "2",
    title: "24 ঘন্টা বিদ্যুৎ সুবিধা।",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689574333/pexels-luca-nardone-3651820_mlvlev.jpg",
    alt: "24 ঘন্টা বিদ্যুৎ সুবিধা।",
  },
  {
    id: "3",
    title: "নৌকার বারান্দায় বিচ চৌকি",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583626/tanguya/64ad5fa09ded3_1686320567378-01_w22pdk.jpg",
    alt: "নৌকার বারান্দায় বিচ চৌকি।",
  },
  {
    id: "4",
    title: "সুসজ্জিত প্রশস্ত লাউঞ্জ।",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583741/tanguya/25981668776_3c3285256a_k_xqimwy.jpg",
    alt: "সুসজ্জিত প্রশস্ত লাউঞ্জ।",
  },
  {
    id: "5",
    title: "কেবিনে ওয়াকওয়ে স্পেস।",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583846/tanguya/pexels-lachlan-ross-6510302_fekxfl.jpg",
    alt: "কেবিনে ওয়াকওয়ে স্পেস।",
  },
  {
    id: "6",
    title: "হাই কমোড, অতিথিদের জন্য একটি নিম্ন কমোড ",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583889/tanguya/64ad5fa0da414_IMG_0735-01-01_ayaniw.jpg",
    alt: "একটি হাই কমোড, অতিথিদের জন্য একটি নিম্ন কমোড এবং জিনিসপত্রের ",
  },
  {
    id: "7",
    title: "পরিস্কার পরিচ্ছন্ন বিছানা, বালিশ এবং কম্বল।",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689583944/tanguya/64ad5fa0de8e8_IMG-20230628-WA0003_v2pg98.jpg",
    alt: "পরিস্কার পরিচ্ছন্ন বিছানা, বালিশ এবং কম্বল।",
  },
  {
    id: "8",
    title: "জায়নামাজ.",
    image:
      "https://res.cloudinary.com/dxitnm55j/image/upload/v1689584075/tanguya/pexels-monstera-5996991_zsqema.jpg",
    alt: "জায়নামাজ.",
  },
];

const OurFacility = () => {
  return (
    <div className="container mx-auto p-5 md:p-10 lg:py-0 ">
      <h3 className="text-3xl sm:text-4xl font-medium ">আমাদের সেবা সমূহ</h3>
      <div className="flex flex-wrap md:justify-between gap-5 lg:gap-3 justify-center mt-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-full  md:w-[20.5rem] h-[12rem] md:h-[12rem] lg:w-[14rem] overflow-hidden relative"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={200}
              height={200}
              className="w-full h-full object-cover "
            />
            <Overlay />
            <p className="absolute text-white text-xl font-semibold text-center  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFacility;
