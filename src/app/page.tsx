import TextAndImage from "@/components/custom/Content/TextAndImage/TextAndImage";
import DestinationsCards from "@/components/custom/Content/DestinationsCards/DestinationsCards";
import Testimonials from '@/components/custom/Testimonials/Testimonials'
import HeroSlickSlider from '@/components/custom/Global/HeroHomeSlider/HeroHomeSlider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

    

    <HeroSlickSlider/>


      <TextAndImage 
      imageLink="/global/collage-8.png"
      imagePostion="right"
      titleText="About Gerenos"
      subHeading="A subheading here"
      content="Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tips, and detailed guides for an authentic experience. Plan your perfect Punjab trip with us!"
      ctaText="Learn More"
      ctaLink=""
      />

      <TextAndImage 
      imageLink="/global/collage-9.png"      
      imagePostion="left"
      titleText="What We Offer?"
      subHeading="A subheading here"  
      content="Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tips, and detailed guides for an authentic experience. Plan your perfect Punjab trip with us!"
      ctaText="Learn More"
      ctaLink=""    
      />  
      <TextAndImage 
      imageLink="/global/collage-7.png"      
      imagePostion="right"
      titleText="Why Us?"
      subHeading="A subheading here"
      content="Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tips, and detailed guides for an authentic experience. Plan your perfect Punjab trip with us!"
      ctaText="Learn More"
      ctaLink=""
      />   


   

        <div className="mb-4">  
        <DestinationsCards acfPostTypeSlug="experiences" cardTitle="Rediscover Yourself - Like a Local" />
        </div>

        <div className=" w-full">  
          <Testimonials/>
        </div>

    </main>
  );
}
