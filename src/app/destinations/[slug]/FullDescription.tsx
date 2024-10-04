
import { useLocation } from 'react-router-dom';


import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react';

export const revalidate = 10

const FullDescription = () => {



 

  return (
    <div className="relative w-full sm:p-4">

    <div className="bg-slate-50 max-w-[600px] mx-auto flex aling-middle justify-center gap-6 text-center flex-col  px-4 py-12">
    <h1 className="text-4xl font-EduVICWANTBeginner mb-4">test</h1>
      <p className="text-sm sm:text-md">



        
      </p>
      <Link href="/destinations/punjab">
      <Button className="max-w-min mx-auto">Back To Destination</Button>
      </Link>
    </div>



    </div>
  )
}

export default FullDescription