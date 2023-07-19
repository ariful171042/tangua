import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <nav className='bg-gray-500/20 text-white h-[10vh] absolute w-full z-50'>
        <div className="container mx-auto w-full h-full">
        <div className="w-full h-full flex justify-between items-center">
            <div className="left">
                <h3 className='text-2xl font-semibold' >টাঙ্গুয়ার ভাসমান বাড়ি</h3>
            </div>
            <div className="right flex gap-5 ">
                <Link href={"/"} className='hover:text-orange-500'>হোম</Link>
                <Link href={"/"} className='hover:text-orange-500'>সম্বন্ধে</Link>
                <Link href={"/gallery"} className='hover:text-orange-500'>ছবি ঘর</Link>
                <Link href={"/contact"} className='hover:text-orange-500'>যোগাযোগ</Link>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navber