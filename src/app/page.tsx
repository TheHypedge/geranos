import TextAndImage from "@/components/custom/Content/TextAndImage/TextAndImage";
import DestinationsCards from "@/components/custom/Content/DestinationsCards/DestinationsCards";
import Testimonials from '@/components/custom/Testimonials/Testimonials'
import HeroSlickSlider from '@/components/custom/Global/HeroHomeSlider/HeroHomeSlider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

    

    <HeroSlickSlider/>


      <TextAndImage/>  
      <div className="mb-8">  

        <DestinationsCards acfPostTypeSlug="destinations" cardTitle="Destinations" />
        </div>

        <div className="mb-12">  
        <DestinationsCards acfPostTypeSlug="experiences" cardTitle="Experiences" />
        </div>

        <div className="mb-8 w-full">  
          <Testimonials/>
        </div>

    </main>
  );
}
