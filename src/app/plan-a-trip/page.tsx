import React from 'react'
import Image from 'next/image'
import PlanATripForm3 from './PlanATripForm3'

const PlanATrip = () => {
  return (
    <div className="flex flex-row">

        <div className="basis-2/5 bg-slate-50 p-12">

            <Image className="sticky top-40 rounded-xl" src="/global/banners/random-4.jpg" alt="Plan A Trip" height="1000" width="1000"/>
        </div>
        <div className="basis-3/5 py-4 px-20 max-w-[760px]">



            <div className="flex flex-col gap-8 max-w-[600px] m-auto w-full mt-12 mb-12 p-6 bg-slate-50">

            <p className="text-3xl font-semibold leading-normal">Let Us Plan Your Getaway!</p>

            <PlanATripForm3/>

            </div>


        </div>


    </div>
  )
}

export default PlanATrip