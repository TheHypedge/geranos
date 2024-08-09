import React from 'react'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import { Button } from '@/components/ui/button'
import Heading from './Heading'

const TextAndImageText = (props:any) => {
  return (
    <div className="text-center md:text-left w-full flex flex-col align-middle justify-center gap-8">
    <h2 className="text-4xl font-bold">{props.titleText}</h2>
    <h3 className="text-2xl text-slate-700 font-medium">{props.subHeading}</h3>
    <p className="text-left">{props.content}</p>
    <div className="text-center">
    <AlgoliaBlueButton ctaText={props.ctaText} ctaLink={props.ctaLink}/>
    </div>


</div>
  )
}

export default TextAndImageText