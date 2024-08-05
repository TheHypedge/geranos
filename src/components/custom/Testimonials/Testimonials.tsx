

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import TestimonialCard from "./TestimonialCard"

export default function CarouselDemo() {
  return (

    <div className="max-w-[1500px] px-[64px] flex m-auto w-full">

    <Carousel
    
    opts={{
      align: "start",
    }}
    className="w-full"    
    
    >
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/1 md:basis-1/3">
            <div className="p-1">
              <Card className="rounded-3xl">
                <CardContent className="flex items-center justify-center p-6">
                  <TestimonialCard/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>

    </div>
  )
}
