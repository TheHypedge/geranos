import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className="border-b-[10px] border-[#9d1116] w-full bg-[#EC1C26] text-white min-h-[90px] flex flex-col justify-around px-4 py-8 pt-12 pb-12">
        <div className="flex flex-row justify-between mb-12">
            <p className="text-xl mt-2">The Travel Compnay: We are great planners!</p>
            <p className="flex gap-2">
              <Link href="https://x.com">
                <Image src="/global/social/x.png" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://facebook.com">
                <Image src="/global/social/facebook.png" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://instagram.com">
                <Image src="/global/social/instagram.png" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://linkedin.com">
                <Image src="/global/social/linkedin.png" alt="Social" width="40" height="40"/>
              </Link>
            </p>

        </div>
        <Separator className="mb-12"/>
        <div className="flex flex-row justify-between">        

        <Link href="/contact">
        <p className="text-xl">Contact</p>
        </Link>

        <p className="text-2xl">WhatsApp</p>
        </div>
    </div>
 

    </>
  )
}

export default Footer