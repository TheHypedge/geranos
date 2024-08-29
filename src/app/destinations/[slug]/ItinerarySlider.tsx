'use client'

import { useEffect } from 'react';
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Image from 'next/image'


import ItinerarySlide from './ItinerarySlide'
import ItineraryApiHit from "./ItineraryApiHit";

const MainContactUsFields = (props:any) => {







    var test = {
        dots: true,
        buttons:true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        pauseOnHover: false,
        waitForAnimate: false,
        nextArrow: <ChevronRightIcon />,
        prevArrow: <ChevronLeftIcon />
      };


  return (
    <>

    <Slider {...test}>


    {props.itineraries && props.itineraries.map((itinerary:any) => (
            <div key={itinerary.id}>
              <p>{itinerary.title.rendered}</p>
            </div>
        ))}
  

  


    </Slider>



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