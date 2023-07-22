import Image from "next/image";
import Gallery from "@/components/Gallery";

const gallery = () => {
  return (
    <div className="">
      <div className="w-full h-[70vh] overflow-hidden relative bg-red-400">
        <Image
          src={
            "https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"
          }
          alt="contact Image"
          width={500}
          height={500}
          className="w-full h-full object-cover "
        />
        <h3 className="text-8xl text-white absolute z-10 top-1/3 translate-x-1/2">
          ছবি ঘর
        </h3>
      </div>
      <div className="container mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

export default gallery;
