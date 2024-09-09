import React from 'react'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link'

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
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Experiences</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-4 text-[#246BEB] font-semibold">
            <li>Tour Packages</li>
            <li>Weekend Getaways</li>
            <li>Experiences</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <p className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            <Link href="/blogs">
            Blogs
            </Link>
        </p>
      </AccordionItem>
      <AccordionItem value="item-4">
        <p className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
            <Link href="/contact">
            Contact
            </Link>
        </p>
      </AccordionItem>

    </Accordion>


    </div>
  )
}

export default MobileNavigation