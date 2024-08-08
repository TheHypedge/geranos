import React from 'react'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const MobileNavigation = () => {
  return (
    <div className="text-left">

<Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Destinations</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 text-[#246BEB] font-semibold">
            <li>Punjab</li>
            <li>Uttarakhand</li>
            <li>Rajasthan</li>
            <li>Kerala</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Experiences</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 text-[#246BEB] font-semibold">
            <li>Cultural Tour</li>
            <li>Farm Stay</li>
            <li>Village Life</li>
            <li>Nature Trails</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <p className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            Blogs
        </p>
      </AccordionItem>
      <AccordionItem value="item-4">
        <p className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            Contact
        </p>
      </AccordionItem>

    </Accordion>


    </div>
  )
}

export default MobileNavigation