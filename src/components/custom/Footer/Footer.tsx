import React from 'react'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import BottomAccordion from './BottomAccordion'
import LastBar from './LastBar'

const Footer = () => {
  return (
    <>
    <div className="border-b-[10px] border-[#246BEB] w-full  min-h-[90px] flex flex-col justify-around px-6 py-8 pt-12 pb-4">
        <div className="flex flex-row justify-between mb-12">


            <div className="mt-2">

              <Image src="/global/geranos-logo.png" height="100" width="140" alt="Geranos Logo" />

            </div>



            <p className="flex gap-2">
              <Link href="https://x.com" className="flex flex-col align-middle justify-center">
                <Image src="/global/social/x.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://facebook.com" className="flex flex-col align-middle justify-center">
                <Image src="/global/social/facebook.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://instagram.com" className="flex flex-col align-middle justify-center">
                <Image src="/global/social/instagram.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
              <Link href="https://linkedin.com" className="flex flex-col align-middle justify-center">
                <Image src="/global/social/linkedin.png" className="rounded" alt="Social" width="40" height="40"/>
              </Link>
            </p>

        </div>
        <Separator className="mb-12"/>

        <div className="flex flex-row justify-between mb-12 ">
          <BottomAccordion/>
        </div>

        <Separator className="mb-12"/>


        <div className="flex flex-row align-middle justify-between">
          <LastBar/>
          <div>
            <p className="text-md mt-2 text-slate-600">© Gerenos Getaways 2024

</p>
          </div>
        </div>




    </div>
 

    </>
  )
}

export default Footer