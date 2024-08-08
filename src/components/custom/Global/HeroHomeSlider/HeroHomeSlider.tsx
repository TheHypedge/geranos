'use client'

import React, { useRef } from "react";
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
        subTitle="The land of Gurudwaras"
        bgImage="https://images.pexels.com/photos/12656946/pexels-photo-12656946.jpeg"
        cardLink="/destinations/punjab"
      />
     
     <HeroHomeSlide
        title="Uttarakhand"
        subTitle="The land of Gurudwaras"
        bgImage="https://images.pexels.com/photos/925069/pexels-photo-925069.jpeg"
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