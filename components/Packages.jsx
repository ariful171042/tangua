import Image from 'next/image'


const Packages = () => {
  return (
    <div className='mt-10 mb-10'>
        <h1 className='container mx-auto'>প্যাকেজ</h1>

        <div className=''>
            <div className="image">
                <Image src={"https://res.cloudinary.com/dxitnm55j/image/upload/v1689583741/tanguya/25981668776_3c3285256a_k_xqimwy.jpg"} width={200} height={500} alt='image'/>
            </div>
            <h3>title:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis neque harum pariatur dolorum, fugiat ab sit odit et quas. Et.</p>
            <p>price:300</p>
            <button>Order Now</button>
              
        </div>
    </div>
  )
}

export default Packages
