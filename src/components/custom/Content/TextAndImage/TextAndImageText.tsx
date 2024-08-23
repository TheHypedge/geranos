import React from 'react'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import { Button } from '@/components/ui/button'
import Heading from './Heading'

const TextAndImageText = (props:any) => {
  return (
    <div className="text-center md:text-left w-full flex flex-col align-middle justify-center gap-8 px-20">
    <h2 className="text-2xl md:text-4xl font-bold text-[#246BEB]">{props.titleText}</h2>
    <h3 className="text-xl md:text-2xl text-slate-700 font-bold">{props.subHeading}</h3>
    <p className="text-justify text-xl">{props.content}</p>
    
    
    { props.ctaLink &&
      <div className="text-center">
      <AlgoliaBlueButton ctaText={props.ctaText} ctaLink={props.ctaLink}/>
      </div>
    }

</div>
  )
}

export default TextAndImageText