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

    <CarouselItem  key={props.indexId} className=" md:basis-1/2 lg:basis-1/4">
    <div className="p-1 ">
      <Card className={`rounded-3xl transition duration-500 border-b-8 border-t-0 border-r-0 border-l-0 hover:border-[#FFE818] border-white bg-[#246BEB] bg-cover https://geranosgetaways.com/wp-content/uploads/2024/08/${props.thumbnailImage}`} >

        <div className=" w-full height-full ">

        <CardContent className="flex flex-col align-bottom justify-end aspect-square p-0">

        <Image className="rounded-3xl w-full" src={props.thumbnailImage} alt="test" width="1000" height="1000"/>


        { (props.cardImageTitle || props.cardImageSubTitle) && 
            <div className="flex flex-col gap-4 relative p-4">
              <div className="text-slate-50 text-sm font-semibold  w-full tracking-widest uppercase">{props.cardImageTitle}</div>
              <div className="text-slate-50  w-full text-md ">{props.cardImageSubTitle}</div>
            </div>
        }



    </CardContent>

    </div>

              </Card>
           
              <p className="mt-6 font-semibold">{props.cardTitleMedium}</p>
              <p className="mt-2">{props.cardTitleLarge}</p>
              <p className="mt-2 text-sm">{props.cardTitleSmall}</p>
            </div>
          </CarouselItem>

  )
}

export default SingleCard