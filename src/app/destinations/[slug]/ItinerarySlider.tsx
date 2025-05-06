'use client'

import { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SingleCard2 from "./SingleCard2";

const MainContactUsFields = (props: any) => {

  // ✅ Move state declarations here
  const [fullVisibility, setFullVisibility] = useState("");
  const [btnVisibility, setBtnVisibility] = useState("hidden");

  useEffect(() => {
    let counter = 0;

    props.itineraries.map((itinerary: any) => {
      if (
        itinerary.acf.offerings === props.offeringFilterSlug &&
        itinerary.acf.destination.post_name === props.destinationFilterSlug
      ) {
        counter++;
        setFullVisibility("");

        if (counter > 4) {
          setBtnVisibility("");
        }
      }
    });
  }, []);

  const sliderSettings = {
    dots: true,
    buttons: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: false,
    waitForAnimate: false,
    nextArrow: <ChevronRightIcon btnVisibility={btnVisibility} />,
    prevArrow: <ChevronLeftIcon btnVisibility={btnVisibility} />,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={`px-[16px] md:p-8 ${fullVisibility} ${props.cstmClass}`}>
      <p className="mt-12 md:mt-0 text-3xl md:text-5xl font-bold text-[#246BEB] font-EduVICWANTBeginner text-center mb-8">
        {props.mainTitle}
      </p>

      <Slider {...sliderSettings}>
        {props.itineraries &&
          props.itineraries.map((itinerary: any) =>
            itinerary.acf.offerings === props.offeringFilterSlug &&
            itinerary.acf.destination.post_name === props.destinationFilterSlug ? (
              <div key={itinerary.id} className="p-0 md:p-4">
                <div className="bg-slate-50 p-0 md:p-4 rounded-3xl md:hover:shadow-md">
                  <SingleCard2
                    mainSlugValue={itinerary.slug}
                    thumbnailImage={itinerary.acf.thumbnail}
                    cardImageTitle={itinerary.acf.slider_settings.title}
                    cardImageSubTitle={itinerary.acf.slider_settings.sub_title}
                  />
                </div>
              </div>
            ) : null
          )}
      </Slider>
    </div>
  );
};

function ChevronLeftIcon(props: any) {
  return (
    <Image
      {...props}
      className={`${props.btnVisibility} bg-[#2F6BEB] max-w-[60px] shadow rounded-xl absolute top-[47%]  left-[0px] z-10`}
      src="/global/banners/left.png"
      width="160"
      height="160"
      alt="Left Slide Icon"
    />
  );
}

function ChevronRightIcon(props: any) {
  return (
    <Image
      {...props}
      className={`${props.btnVisibility} bg-[#2F6BEB] max-w-[60px] shadow rounded-xl absolute top-[47%]  right-[0px] z-10`}
      src="/global/banners/right.png"
      width="160"
      height="160"
      alt="Right Slide Icon"
    />
  );
}

export default MainContactUsFields;
