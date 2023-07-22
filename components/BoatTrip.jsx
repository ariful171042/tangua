import Image from "next/image";

const BoatTrip = () => {
  return (
    <div className="container mx-auto  mt-10 flex sm:flex-row flex-col justify-between gap-5">
      <div className="image w-[25rem]">
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
      <div className="detals flex flex-col  justify-between sm:px-0 p-5 ">
        <h2 className="mb-2 text-3xl font-medium">
          একটি নৌকা ভ্রমণ আপনার অবকাশ সম্পূর্ণ করতে পারে
        </h2>
        <p className="text-xl tracking-wide text-start">
          ফ্লোটিং হাউস অফ টাঙ্গুয়া হল পরাক্রমশালী টাঙ্গুয়ার হাওরে একটি পরিবেশ
          বান্ধব প্রিমিয়াম হাউস বোট, যা ভ্রমনচক্রো এর বোনের উদ্বেগ। এটি
          শুধুমাত্র একটি নৌকা নয়, এটি টাঙ্গুয়ার হাওরে একটি হাউস বোট, যেখানে
          আপনি একটি বাড়ির মতো প্রিমিয়াম সুবিধা পাবেন। আমরা সর্বদা সর্বোত্তম
          পরিষেবা, ভ্রমণ বান্ধব পরিবেশ, সুস্বাদু খাবার এবং ভাল আচরণকারী স্টাফ
          সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।
        </p>
        <button className="mt-3 bg-yellow-400 p-2 rounded-md">আরও জানুন</button>
      </div>
    </div>
  );
};

export default BoatTrip;
