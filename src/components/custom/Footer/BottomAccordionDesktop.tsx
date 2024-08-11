import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ContactUsSmall from './ContactUsSmall'
import TravelNews from './CommonComponenets/TravelNews'
import ListAccomodations from './CommonComponenets/ListAccomodations'
import Advertise from './CommonComponenets/Advertise'
import AboutUs from './CommonComponenets/AboutUs'

const BottomAccordion = () => {
  return (
    <div className="w-full flex flex-row align-middle justify-between gap-20">

        <div className="w-full flex flex-col gap-4">

        <p className="flex w-full accCstmClsFtr text-sm font-semibold tracking-wider">ABOUT</p>
        <div className="flex">
            <AboutUs/>
        </div>

        </div>





      <div className="w-full flex flex-col gap-4 ml-20">

            <p className="flex w-full accCstmClsFtr text-sm font-semibold tracking-wider">ADVERTISE & LIST ACCOMODATIONS</p>
            <p className="flex">
                <Advertise/>
            </p>

      </div>





        <div className="w-full flex flex-col gap-4">

        <p className="flex w-full accCstmClsFtr text-sm font-semibold tracking-wider">TRAVEL NEWS</p>
        <div className="flex">
            <TravelNews/>
        </div>

        </div>







    </div>
  )
}

export default BottomAccordion