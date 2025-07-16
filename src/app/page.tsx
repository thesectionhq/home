import Hero from "@/components/hero";
import Single from "@/components/single-latest";
import Banner from "@/components/banner";
import EditorialTabs from "@/components/editorial-tabs";
import WelcomePreloader from "@/components/welcome-preloader";


export default function HomePage(){
  return (
    <div className='overflow-x-hidden'>
      <WelcomePreloader />
      <Banner />
      <Hero />
      <Single />
      <EditorialTabs />
    </div>
  )
}
