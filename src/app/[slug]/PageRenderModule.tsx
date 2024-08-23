'use client'

import React from 'react'
import { useEffect } from 'react';

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"


const PageRenderModule = (props: any) => {

  return (       

<>


{ (props.pageData.acf.featured_image) &&

    <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-6 text-center flex-col max-h-[320px] sm:max-h-[420px] h-full">
    <Image src={props.pageData.acf.featured_image} width="1920" height="800" alt="Featured Image" className="  max-h-[320px] sm:max-h-[420px] h-full w-full object-cover bg-cover   bg-slate-50"/>

    

    </div>

}

        <div className="flex flex-col gap-8 max-w-[800px] m-auto px-4 pt-16 pb-8">

        <h1 className="font-EduVICWANTBeginner text-4xl xl:text-6xl font-semibold  text-[#2F6BEB] leading-loose">{props.pageData.title.rendered}</h1>
        <Separator />

        <div className="postContParaFixCstm text-left" dangerouslySetInnerHTML={{__html: props.pageData.content.rendered}}/>

 
      </div>
    </>
  )
}

export default PageRenderModule