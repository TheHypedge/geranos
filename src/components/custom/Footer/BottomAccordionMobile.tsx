import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import LeftMenuItems from './CommonComponenets/LeftMenuItems'
import ListAccomodations from './CommonComponenets/ListAccomodations'
import TravelNews from './CommonComponenets/TravelNews'

const BottomAccordion = () => {
  return (
    <div className="w-full flex flex-col align-middle justify-between gap-2 px-8">

      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="about" className="border-none">
            <AccordionTrigger className="w-full text-sm sm:text-sm hover:decoration-none tracking-wider">ABOUT</AccordionTrigger>
            <AccordionContent className="pb-0 border-none">

              <LeftMenuItems/>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="advertize" className="border-none">
            <AccordionTrigger className="w-full text-sm sm:text-sm hover:decoration-none tracking-wider">ADVERTIZE</AccordionTrigger>
            <AccordionContent className="pb-0 border-none">

              <ListAccomodations/>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="news" className="border-none">
            <AccordionTrigger className="w-full text-sm sm:text-sm hover:decoration-none tracking-wider">TRAVEL NEWS</AccordionTrigger>
            <AccordionContent className="pb-0 border-none">

              <TravelNews/>

            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}

export default BottomAccordion