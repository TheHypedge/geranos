import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import GeneralMenu from './GeneralMenu'
import DestinationsMenu from './DestinationsMenu'
import ExperiencesMenu from './ExperiencesMenu'

const Footer = () => {
  return (
    <>
    <div className="border-b-[10px] border-[#246BEB] w-full bg-white  min-h-[90px] flex flex-col justify-around px-4 py-8 pt-12 pb-12">
        <div className="flex flex-row justify-between mb-12">
            <p className="text-md mt-2">© Gerenos Getaways 2024</p>
            <p className="flex gap-2">
              <Link href="https://x.com">
                <Image src="/global/social/x.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://facebook.com">
                <Image src="/global/social/facebook.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://instagram.com">
                <Image src="/global/social/instagram.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://linkedin.com">
                <Image src="/global/social/linkedin.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
            </p>

        </div>
        <Separator className="mb-12"/>

        <div className="flex flex-row justify-between mb-12 ">
     
        <div className="flex flex-col gap-8">

          <DestinationsMenu/>
          <ExperiencesMenu/>
          <GeneralMenu/>          
        </div>
        <div className="flex flex-col gap-8  font-semibold">
          <div>
          contact@gerenosgeaways.com
          </div>
          <div>
          +91 8699 81 2196
          </div>

        </div>
        </div>
    </div>
 

    </>
  )
}

export default Footer