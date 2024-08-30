'use client'

import { useEffect } from 'react';
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image from 'next/image'



import SingleCard2 from "./SingleCard2"

const MainContactUsFields = (props:any) => {






    var test = {
        dots: true,
        buttons:true,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:false,
        pauseOnHover: false,
        waitForAnimate: false,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };


  return (
    <>
        <div className="p-8">

<p className="text-center text-2xl mb-8 md:text-4xl font-bold text-[#246BEB] font-EduVICWANTBeginner">{props.offeringFilterSlug}</p>

    <Slider {...test}>


    {props.itineraries && props.itineraries.map((itinerary:any) => (

        ((itinerary.acf.offerings === props.offeringFilterSlug) && (itinerary.acf.destination.post_name === props.destinationFilterSlug)) && (

        <div key={itinerary.id} className=" p-4">
          <div className="bg-slate-50 p-4 rounded-3xl hover:shadow-md">

          <SingleCard2
          key={itinerary.id}
          mainSlugValue={itinerary.slug}
          thumbnailImage={itinerary.acf.thumbnail}
          cardImageTitle={itinerary.acf.slider_settings.title}
          cardImageSubTitle={itinerary.acf.slider_settings.sub_title}
          />
          
          </div>
        </div>
        )
        

    ))}
  

  


    </Slider>

    </div>

    </>
  )
}




function ChevronLeftIcon(props:any) {
    return (
        <Image {...props} src="/global/banners/left.png" width="160" height="160" alt="Left Slide Icon"/>
    )
  }
  
  
  function ChevronRightIcon(props:any) {
    return (
        <Image {...props} src="/global/banners/right.png" width="160" height="160" alt="Right Slide Icon"/>
    )
  }

export default MainContactUsFields