import React from 'react'
import Heading from './Heading'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import DestinationSlider from './DestinationSlider'

const DestinationsCards = (props:any) => {
  return (
    <div className="max-w-[1540px] px-[48px] flex m-auto w-full">
        <div className="flex gap-4 flex-col justify-between w-full xl:flex-row p-4">
            <div className="w-full flex flex-col align-middle justify-center gap-8">

              <div className="mb-4">
                <Heading className="text-[#246BEB]" content={props.cardTitle}/>
              </div>

                <DestinationSlider acfPostTypeSlug={props.acfPostTypeSlug} />
                
              <div>
                  <AlgoliaBlueButton ctaText="All Destinations" ctaLink="/"/>
              </div>


            </div>
        </div>
    </div>
  )
}

export default DestinationsCards