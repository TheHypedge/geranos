import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

const SingleCard = (props:any) => {



  return (
 
    <CarouselItem key={props.indexId} className=" md:basis-1/2 lg:basis-1/3">
    <div className="p-1 ">
      <Card className="rounded-2xl bg-[url('/global/destinations/uttarakhand-tracking.png')] bg-blend-darken bg-cover ">

        <div className=" w-full height-full rounded-2xl">

        <CardContent className="flex flex-col align-bottom justify-end aspect-square p-6">
   <div className="flex flex-col gap-4">
    <div className="text-slate-50 font-semibold bottom-4 w-full tracking-widest uppercase">{props.cardImageTitle}</div>
    <div className="text-slate-50  bottom-4 w-full text-sm ">{props.cardImageSubTitle}</div>
    </div>

    </CardContent>

    </div>

              </Card>
              <p className="mt-6 font-semibold">The land of templates</p>
              <p className="mt-2">Starting from ₹ 28,000</p>
              <p className="mt-2 text-sm">1 Day to 7 Days tours</p>
            </div>
          </CarouselItem>

  )
}

export default SingleCard