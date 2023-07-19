"use clients"
import Image from 'next/image'





const ContactPage = () => {
  return (
    <div className=''>
       <div className='w-full h-[70vh] overflow-hidden relative bg-red-400'>
       <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689496243/tanguya/pexels-thiago-japyassu-929032_sgohn9.jpg"} alt='contact Image' width={500} height={500} className='w-full h-full object-cover '/>
       <h3 className='text-8xl text-white absolute z-10 top-1/3 translate-x-1/2'>যোগাযোগ</h3>
       </div>

      <div className='container mx-auto flex justify-between gap-3 mt-10'>
      <div className='detals flex flex-col gap-3'>
        <h2 className='text-4xl font-semibold '>বুকিং করুন এখান থেকেই</h2>
        <p className='text-lg  mt-2 w-[50vw]'>টাঙ্গুয়ার হাওর ভ্রমণের সকল তথ্য বাতান হাউজবোট ও অন্যান্য হাউজবোট বুকিং এবং যেকোন ধরনের সেবা নিতে যোগাযোগ করুন। মনে রাখবেন টাঙ্গুয়ার হাওড় ভ্রমনে আমরাই দিচ্ছি ওয়ান স্টপ সার্ভিস।</p>
            <p className='text-lg w-[50vw]'><span className='text-xl font-semibold'>Dhaka Office:</span> Apartment # A3, Level # 3, House # 31/A, Road # 21, Nikunja-02 (Le Meridian Road), Khilkhet, Dhaka-1229.</p>
            <p className='text-lg w-[50vw]'><span className='text-xl font-semibold'>Sunamganj Office:</span> Launch Ghat, Sunamganj.</p>
            <p><span></span>+880 1780 200 388</p>
            <p><span></span>+880 1894 442 421</p>
            <p>info.vchokro@gmail.com</p>
            <p>January To December 09:00am To 11:59pm</p>
       </div>
       <div>
       <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689499847/tanguya/pexels-miro-alt-176400_t7nl10.jpg"} alt='contact Image' width={500} height={500} className='w-full h-full object-cover '/>
       </div>
      </div>
    </div>
  )
}

export default ContactPage