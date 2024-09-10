import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'

const InnerHeroOne = (props:any) => {


  return (
    <div className={`bg-cover bg-[url('/global/banners/contact-5.jpg')] bg-center min-h-[320px] md:min-h-[420px] xl:min-h-[420px] bg-slate-50`}>
        <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-4 md:gap-6 text-center flex-col min-h-[320px] md:min-h-[420px] xl:min-h-[420px] px-4 py-12">
        <h1 className="text-white text-[2.5rem] sm:text-5xl md:text-6xl xl:text-6xl font-EduVICWANTBeginner mb-[-8px] md:mb-[0px]">{props.title}</h1>
        <p className="text-white text-xl">{props.subtitle}</p>
        
        <Link href="#cstmContId" id="cstmContId" className="max-w-min mx-auto">
          <Button className="max-w-min mx-auto font-normal text-xl md:text-xl bg-transparent hover:bg-transparent border-2 border-white text-white p-4 md:p-6 rounded-full">
            {props.ctaText} ↓
          </Button>
        </Link>
        </div>
    </div>
  )
}

export default InnerHeroOne