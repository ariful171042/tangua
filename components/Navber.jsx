import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <nav className='bg-transparent h-[10vh]'>
        <div className="container mx-auto w-full h-full">
        <div className="w-full h-full flex justify-between items-center">
            <div className="left">
                <h3 >টাঙ্গুয়ার ভাসমান বাড়ি</h3>
            </div>
            <div className="right flex gap-5">
                <Link href={"/"}>হোম</Link>
                <Link href={"/"}>সম্বন্ধে</Link>
                <Link href={"/gallery"}>ছবি ঘর</Link>
                <Link href={"/contact"}>যোগাযোগ</Link>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navber