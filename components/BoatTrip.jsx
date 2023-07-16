import Image from 'next/image'
import React from 'react'

const BoatTrip = () => {
  return (
    <div className='container mx-auto w-[70vw] mt-10'>
        <div className="image ">
            <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689490442/tanguya/pexels-quang-nguyen-vinh-2132008_rasvzu.jpg"} alt='boat Image' width={300} height={300} className='w-full h-full object-cover'/>
        </div>
        <div className="detals flex flex-col items-center justify-center mt-5">
        <h2 className='mb-2 text-3xl font-medium'>একটি নৌকা ভ্রমণ আপনার অবকাশ সম্পূর্ণ করতে পারে</h2>
        <p className='text-lg tracking-wide text-center'>"ফ্লোটিং হাউস অফ টাঙ্গুয়া" হল পরাক্রমশালী টাঙ্গুয়ার হাওরে একটি পরিবেশ বান্ধব প্রিমিয়াম হাউস বোট, যা "ভ্রমনচক্রো" এর বোনের উদ্বেগ। এটি শুধুমাত্র একটি নৌকা নয়, এটি টাঙ্গুয়ার হাওরে একটি হাউস বোট, যেখানে আপনি একটি বাড়ির মতো প্রিমিয়াম সুবিধা পাবেন। আমরা সর্বদা সর্বোত্তম পরিষেবা, ভ্রমণ বান্ধব পরিবেশ, সুস্বাদু খাবার এবং ভাল আচরণকারী স্টাফ সরবরাহ করতে প্রতিশ্রুতিবদ্ধ।</p>
        </div>
    </div>
  )
}

export default BoatTrip