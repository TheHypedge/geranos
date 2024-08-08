'use client'

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './SlickSlider.css'
import Image from 'next/image'
import HeroHomeSlide from "./HeroHomeSlide";
import ApiWork from "./ApiWork";

import { useState } from "react";

export default function SimpleSlider() {

  var settings = {
    dots: false,
    buttons:true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <ChevronRightIcon />,
    prevArrow: <ChevronLeftIcon />
  };
  return (

    <>

    <Slider 

    {...settings}>


      <HeroHomeSlide
        title="Punjab"
        subTitle="The Land of Timeless Heritage"
        bgImage="https://images.pexels.com/photos/12656946/pexels-photo-12656946.jpeg"
        cardLink="/destinations/punjab"
      />
     
     <HeroHomeSlide
        title="Uttarakhand"
        subTitle="Nature's Haven, Spiritual Journey"
        bgImage="https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg"
        cardLink="/destinations/punjab"
      />

      <HeroHomeSlide
        title="Rajasthan"
        subTitle="Where Heritage Meets the Golden Sands"
        bgImage="https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg"
        cardLink="/destinations/punjab"
      />

      <HeroHomeSlide
        title="Kerala"
        subTitle="Nature's Own Paradise, Scenic Splendor"
        bgImage="https://images.pexels.com/photos/5007356/pexels-photo-5007356.jpeg"
        cardLink="/destinations/punjab"
      />




    </Slider>



    </>


  );
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