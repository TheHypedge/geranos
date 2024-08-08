import React from 'react'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import { Button } from '@/components/ui/button'
import Heading from './Heading'

const TextAndImageText = (props:any) => {
  return (
    <div className="text-center md:text-left w-full flex flex-col align-middle justify-center gap-8">
    <h2 className="text-4xl font-bold">{props.titleText}</h2>
    <h3 className="text-2xl text-slate-700 font-medium">"Another reason to be with us"</h3>
    <p className="text-left">Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tips, and detailed guides for an authentic experience. Plan your perfect Punjab trip with us!</p>
    <div className="text-center">
    <AlgoliaBlueButton ctaText="Learn More" ctaLink="/"/>
    </div>


</div>
  )
}

export default TextAndImageText