/*

              <div className="">
                  <AlgoliaBlueButton  ctaText="All Offerings" ctaLink="/"/>
              </div>

*/ 

import React from 'react'
import Heading from './Heading'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import DestinationSlider from './DestinationSlider'

const DestinationsCards = (props:any) => {
  return (
    <div className="max-w-[1540px] px-[48px] flex m-auto w-full">
        <div className="flex gap-4 flex-col justify-between w-full xl:flex-row p-4">
            <div className="w-full flex flex-col align-middle justify-center gap-2">

              <div className="mb-4">
                <h2 className="text-4xl font-semibold text-center mt-8">{props.cardTitle}</h2>
              </div>

                <DestinationSlider acfPostTypeSlug={props.acfPostTypeSlug} />
                
            </div>
        </div>
    </div>
  )
}

export default DestinationsCards