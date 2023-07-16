import Image from "next/image"


const Gallery = () => {
  return (
    <div className="container mx-auto">
        <div className='w-full h-[50vh] overflow-hidden relative bg-red-400'>
       <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt='contact Image' width={500} height={500} className='w-full h-full object-cover '/>
       <h3 className='text-8xl text-white absolute z-10 top-1/3 translate-x-1/2'>ছবি ঘর</h3>
       
       </div>
       <h2 className="mt-10 text-5xl font-medium">টাঙ্গুয়ার হাওর ভ্রমণ ফটোগ্যালারি</h2>
       <div className="mt-10 grid gap-2 grid-cols-3">
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="col-span-1"/>
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="col-span-1"/>
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="con-span-1"/>
       </div>
       <div className="mt-10 grid gap-2 grid-cols-3">
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="col-span-1"/>
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="col-span-1"/>
        <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt="tanguya tour image" width={500} height={500} className="con-span-1"/>
       </div>
    </div>
  )
}

export default Gallery