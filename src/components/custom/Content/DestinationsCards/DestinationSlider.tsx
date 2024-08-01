import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SingleCard from "./SingleCard"

import DataBase from '../../../../../public/data/HomeDestinationsCard.json'

export default function CarouselSize() {

  console.log(DataBase);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 8 }).map((_, index) => (

                  

                    <SingleCard indexId={index} backgroundImg="/global/destinations/uttarakhand-tracking.png"/>


        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
