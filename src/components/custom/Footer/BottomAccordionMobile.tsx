import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import ContactUsSmall from './ContactUsSmall'

const BottomAccordion = () => {
  return (
    <div className="w-full flex flex-col align-middle justify-between gap-4">

      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="about" className="xl:border-none">
            <AccordionTrigger className="w-full accCstmClsFtr text-sm sm:text-sm hover:decoration-none tracking-wider">ABOUT</AccordionTrigger>
            <AccordionContent>
            Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple, Shivalik hills, and more. Get curated itineraries, insider tipse. Plan your perfect Punjab trip with us</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>





      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="advertize" className="xl:border-none">
            <AccordionTrigger className="w-full accCstmClsFtr text-sm sm:text-sm hover:decoration-none tracking-wider">ADVERTIZE</AccordionTrigger>
            <AccordionContent>
              <ContactUsSmall/>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>







      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="accomodation" className="xl:border-none">
            <AccordionTrigger className="w-full accCstmClsFtr text-sm sm:text-sm hover:decoration-none tracking-wider">LIST ACCOMODATIONS</AccordionTrigger>
            <AccordionContent>
              <ContactUsSmall/>            
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>


      <div className="w-full">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="news" className="xl:border-none">
            <AccordionTrigger className="w-full accCstmClsFtr text-sm sm:text-sm hover:decoration-none tracking-wider">TRAVEL NEWS</AccordionTrigger>
            <AccordionContent>
            Discover Punjab with our tourism website, your guide to its rich heritage and scenic beauty. Explore top attractions like the Golden Temple
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>







    </div>
  )
}

export default BottomAccordion