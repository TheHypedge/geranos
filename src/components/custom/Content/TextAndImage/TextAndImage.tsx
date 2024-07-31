import React from 'react'
import Heading from './Heading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const TextAndImage = () => {
  return (
    <div className="max-w-[1200px] flex m-auto w-full">
        <div className="flex gap-4 flex-col justify-between w-full xl:flex-row py-12 px-4">
            <div className="w-full flex flex-col align-middle justify-center gap-8">
                <Heading content="Gerenos Getaways"/>
                <p>Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tips, and detailed guides for an authentic experience. Plan your perfect Punjab trip with us!</p>
                <Button className="max-w-min">Read More</Button>
            </div>
            <div className="w-full">
                <Image src="/global/collage-1.png" width="800" height="800" alt="Image"/>
            </div>
        </div>
    </div>
  )
}

export default TextAndImage