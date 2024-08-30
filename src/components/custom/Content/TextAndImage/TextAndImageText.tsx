import React from 'react'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import { Button } from '@/components/ui/button'
import Heading from './Heading'

const TextAndImageText = (props:any) => {
  return (
    <div className="text-center md:text-left w-full flex flex-col align-middle justify-center gap-8 px-0 md:px-20">
    <h2 className="text-2xl md:text-5xl font-bold text-[#246BEB] font-EduVICWANTBeginner">{props.titleText}</h2>
    <h3 className="text-xl md:text-2xl text-slate-700 font-bold font-UrbanistLight">{props.subHeading}</h3>
    <p className="text-justify text-sm sm:text-xl font-UrbanistLight tracking-wide">{props.content}</p>
    
    
    { props.ctaLink &&
      <div className="text-center">
      <AlgoliaBlueButton ctaText={props.ctaText} ctaLink={props.ctaLink}/>
      </div>
    }

</div>
  )
}

export default TextAndImageText