import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SingleCard from "./SingleCard"


export const revalidate = 1

export default async function CarouselSize() {

  const req = await fetch(`https://geranosgetaways.com/wp-json/wp/v2/destinations?acf_format=standard?_fields=id,thumbnail,thumbnail_title_1,thumbnail_title_2,slider_title_medium,slider_title_large,slider_title_small`); 
  const pages = await req.json(); 

  return (
    <>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
 
      {
      pages && pages.map((destination:any) => {
        return (
    
          <SingleCard 

          cardImageTitle={destination.acf.thumbnail_title_1}
          cardImageSubTitle={destination.acf.thumbnail_title_2}
          />
   
          )
      })
      }
                    



      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </>
  )
}
