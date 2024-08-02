"use client"

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

import { useEffect } from "react"

export default function CarouselSize() {

  useEffect(() => {
    console.log("Length", DataBase.length); 
  }, []);

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
      DataBase && DataBase.map((data) => {
        return (
    
          <SingleCard 
          key={data.prefId}  
          backgroundImg={data.backgroundImg}
          cardImageTitle={data.cardImageTitle}
          cardImageSubTitle={data.cardImageSubTitle}
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
