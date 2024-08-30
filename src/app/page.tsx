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
      titleText="About Geranos Getaways"
      subHeading="Your Gateway to Authentic Cultural and Luxurious Journeys"
      content="<p>At Geranos Getaways, we believe in appreciating culture through tourism. Travelling is about visiting new places and experiencing new ways of life, traditions, and values. By immersing ourselves in local culture, we can better understand and appreciate the world around us.</p><p>Our motto, <u><b>'rediscover yourself'</b></u>, speaks to the essence of travelling and the motivation to escape from our comfort zones and experience tourism responsibly. Our mission is to provide travellers with an authentic and immersive cultural experience that allows them to appreciate the diversity of our world and rediscover themselves in the process.</p><p>We understand that time is of the essence in today’s fast-paced world. Our digital platform is a treasure trove of meticulously researched information focused on short yet profoundly impactful getaways in Punjab and Uttarakhand. Our offerings are tailored to satiate the thirst of those whose time may be finite but whose appetite for adventure knows no bounds.</p>"
      ctaText="Learn More"
      ctaLink=""
      />

      <TextAndImage 
      imageLink="/global/collage-11.png"      
      imagePostion="left"
      titleText="What We Offer?"
      subHeading="Curated, Immersive Experiences Designed Just for You"  
      content="<p>At Geranos Getaways, we take pride in curating deeply personal and tailored luxury tours in Punjab Uttarakhand and other parts of India, designed to immerse you in authentic local experiences that seamlessly blend historical and religious cultural excursions with eco-friendly and sustainable accommodations. Our meticulously planned itineraries foster genuine connections with rural communities, providing opportunities for farm stays, immersive village experiences, traditional culinary and craft workshops, local food discovery, and nature trail adventures. These exceptional offerings promise an enriching and unforgettable exploration of these regions' diverse heritage, natural wonders, and vibrant local culture.</p>"
      ctaText="Learn More"
      ctaLink=""    
      />  
      
      <TextAndImage 
      imageLink="/global/collage-13.png"      
      imagePostion="right"
      titleText="Why Us?"
      subHeading="Responsible Travel, Personalized Service, and Unforgettable Memories"
      content="<p>We understand the value of responsible travel and are committed to providing personalized journeys that align with your ethical principles. Our expert companions will accompany you on an immersive exploration of Punjab, Uttarakhand, and other regions of India. We prioritise luxurious yet eco-friendly and responsible local accommodations and travel, ensuring that your journey is enriching and sustainable, allowing you to deeply connect with the nature, cultures and heritage of these regions.</p>"
      ctaText="Learn More"
      ctaLink=""
      />   


   


        <div className="mt-2 md:mt-12 w-full">  
          <Testimonials/>
        </div>

    </main>
  );
}
