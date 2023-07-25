import Image from "next/image";

const BoatTrip = () => {
  return (
    <div className="container mx-auto mt-5  md:px-10 md:pt-5 flex  flex-col lg:grid lg:grid-cols-2  justify-between gap-5 2xl:gap-8">
      <div className="image w-full">
        <Image
          src={
            "https://res.cloudinary.com/dxitnm55j/image/upload/v1689490442/tanguya/pexels-quang-nguyen-vinh-2132008_rasvzu.jpg"
          }
          alt="boat Image"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="detals flex flex-col  justify-between lg:p-0 px-5 ">
        <h2 className="mb-2 text-3xl  font-semibold md:text-3xl xl:font-bold 2xl:text-5xl ">
          একটি নৌকা ভ্রমণ আপনার অবকাশ সম্পূর্ণ করতে পারে
        </h2>
        <p className="text-xl text-justify md:tracking-wide  xl:leading-snug xl:text-2xl 2xl:text-3xl 2xl:text-justify">
          ফ্লোটিং হাউস অফ টাঙ্গুয়া হল পরাক্রমশালী টাঙ্গুয়ার হাওরে একটি পরিবেশ
          বান্ধব প্রিমিয়াম হাউস বোট, যা ভ্রমনচক্রো এর বোনের উদ্বেগ। এটি
          শুধুমাত্র একটি নৌকা নয়, এটি টাঙ্গুয়ার হাওরে একটি হাউস বোট, যেখানে
          আপনি একটি বাড়ির মতো প্রিমিয়াম সুবিধা পাবেন। আমরা সর্বদা সর্বোত্তম
          পরিষেবা, ভ্রমণ বান্ধব পরিবেশ, সুস্বাদু খাবার এবং ভাল আচরণকারী স্টাফ
          সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
        </p>
        <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 p-2 rounded-md 2xl:p-3 2xl:text-2xl">
          আরও জানুন
        </button>
      </div>
    </div>
  );
};

export default BoatTrip;
