

import React from 'react'
import Image from 'next/image'
import PlanATripForm3 from './PlanATripForm3'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { useState } from 'react'

const PlanATrip = () => {


 


  return (


    <>









<div className="bg-cover bg-[url('/global/banners/contact-3.jpg')]  min-h-[420px]  bg-slate-50">
            <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-6 text-center flex-col min-h-[420px] px-4 py-12">
            <h1 className="text-white text-5xl font-semibold">Let Us Plan Your Getaway!</h1>
            <p className="text-white text-xl">Fill the form and we will get back to you in 24 hours!</p>
            
            <Link href="#cstmContId" id="cstmContId" className="">
              <Button className="max-w-min mx-auto font-normal text-2xl bg-transparent hover:bg-transparent border-2 border-white text-white p-6 rounded-full">
                Fill the Form ↓
              </Button>
            </Link>
            </div>
        </div>
















    <div className="flex flex-col md:flex-row">

        <div className="basis-2/5 p-12">

            <div className="max-w-[520px]">



            <div className="border-2 rounded-xl p-8 mt-8 mb-20">
      
      <ul className="flex flex-col gap-4">
      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 1 - Tell Us About Yourself</p>
      <p className=" text-slate-600 mb-2">Fill up the form and verify the personal details.</p>
      </li>
      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 2 - Your Idea for a Getaway</p>
      <p className=" text-slate-600 mb-2">Choose from a dropdown list of getaway types.</p>
      </li>
      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 3 - Customized Getaway Plan</p>
      <p className=" text-slate-600 mb-2">Receive a tailor-made itinerary based on your preferences.</p>
      </li>
      <li>
      <p className="font-semibold  text-slate-800 mb-4">Step 4 - Book & Pay</p>
      <p className=" text-slate-600 mb-2">Secure your dream getaway with easy payment options.</p>
      </li>
      </ul>

    </div>



              <Image className="sticky top-40 rounded-xl" src="/global/banners/random-4.jpg" alt="Plan A Trip" height="1000" width="1000"/>
        


            </div>  


      
        </div>
        <div className="basis-3/5 py-4 px-[80px] max-w-[860px]">

           

            <div className="p-8 flex flex-col gap-8  m-auto w-full mt-12 mb-12 bg-slate-50">



           

            <PlanATripForm3/>

            </div>


        </div>





        <div className="basis-3/5 py-4 px-[80px] max-w-[860px]">
        
        
        
        
        </div>




    </div>

    </>

  )
}

export default PlanATrip