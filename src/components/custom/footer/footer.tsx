import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"


const Footer = () => {
  return (
    <>
    <div className="border-b-[10px] border-[#9d1116] w-full bg-[#EC1C26] text-white min-h-[90px] flex flex-col justify-around px-4 py-2 pt-12 pb-12">
        <div className="flex flex-row">
            <p className="text-2xl">The Travel Compnay: We are great planners!</p>
            <p className="text-2xl">WhatsApp</p>

        </div>
        <Separator />
        <div className="flex flex-row">        

        <p className="text-2xl">The Travel Compnay: We are great planners!</p>
        <p className="text-2xl">WhatsApp</p>
        </div>
    </div>
 

    </>
  )
}

export default Footer