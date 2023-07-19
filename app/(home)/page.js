import BoatTrip from "@/components/BoatTrip"
import HeroSection from "@/components/HeroSection"
import OurFacility from "@/components/OurFacility"
import Packages from "@/components/packages"




const HomePage = () => {
  return (
    <div className=''>
      <HeroSection/>
      <BoatTrip/>
      <OurFacility/>
      <Packages/>
    </div>
  )
}

export default HomePage