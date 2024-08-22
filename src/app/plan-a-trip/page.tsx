

import React from 'react'
import Image from 'next/image'
import PlanATripForm3 from './PlanATripForm4'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"


import { useState } from 'react'

const PlanATrip = () => {


 


  return (


    <>









<div className="bg-cover bg-[url('/global/banners/contact-5.jpg')] bg-center min-h-[420px]  bg-slate-50">
            <div className="bg-[rgba(0,0,0,0.3)]min-h-[520px] flex aling-middle justify-center gap-6 text-center flex-col min-h-[420px] px-4 py-12 bg-[rgba(0,0,0,0.2)]">
            <h1 className="font-dancingScript text-white text-7xl font-semibold">Let Us Plan Your Getaway!</h1>
            <p className="text-white text-xl">Fill the form and we will get back to you in 24 hours!</p>
            
            <Link href="#cstmContId" id="cstmContId" className="">
              <Button className="max-w-min mx-auto font-normal text-2xl bg-transparent hover:bg-transparent border-2 border-white text-white p-6 rounded-full">
                Fill the Form ↓
              </Button>
            </Link>
            </div>
        </div>
















    <div className="flex flex-col justify-between md:flex-row">

        <div className="max-w-[360px] w-full py-8 pl-4">

            <div className="max-w-[420px]">



            <div className="border-2 rounded-xl p-8 mt-8 mb-20">
      
      <ul className="flex flex-col gap-4">
      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 1 - Tell Us About Yourself</p>
      <p className="text-sm text-slate-600 mb-2">Fill up the form and verify the personal details and more things.</p>
      </li>
      <Separator />

      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 2 - Your Idea for a Getaway</p>
      <p className="text-sm text-slate-600 mb-2">Choose from a dropdown list of getaway types. We have a lot to offer.</p>
      </li>
      <Separator />

      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 3 - Customized Getaway Plan</p>
      <p className="text-sm text-slate-600 mb-2">Receive a tailor-made itinerary based on your preferences.</p>
      </li>
      <Separator />

      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 4 - Book & Pay</p>
      <p className="text-sm text-slate-600 mb-2">Secure your dream getaway with easy payment options.</p>
      </li>
      </ul>

    </div>



              <Image className="sticky top-40 rounded-xl" src="/global/banners/random-4.jpg" alt="Plan A Trip" height="1000" width="1000"/>
        


            </div>  


      
        </div>
        <div className="py-4 px-[20px] max-w-[620px]">

           

            <div className="p-8 flex flex-col gap-8  m-auto w-full mt-4 bg-[rgba(255,255,255,1)">



           

            <PlanATripForm3/>

            </div>


        </div>





        <div className="py-4 px-[80px] max-w-[360px] w-full">
        
      
        </div>




    </div>

    </>

  )
}

export default PlanATrip