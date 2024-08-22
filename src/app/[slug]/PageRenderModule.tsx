'use client'

import React from 'react'
import { useEffect } from 'react';

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'


const PageRenderModule = (props: any) => {





  return (       

<>



    <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-6 text-center flex-col max-h-[320px] sm:max-h-[420px] h-full z-10">
    <Image src={props.pageData.acf.featured_image} width="1920" height="800" alt="Featured Image" className="absolute  max-h-[320px] sm:max-h-[420px] h-full w-full object-cover bg-cover   bg-slate-50"/>

    

    </div>







        <div className="flex flex-col gap-8 max-w-[800px] m-auto px-2 pt-16 pb-8">

        <h1 className="text-5xl font-semibold">{props.pageData.title.rendered}</h1>
        <div className="postContParaFixCstm text-left" dangerouslySetInnerHTML={{__html: props.pageData.content.rendered}}/>

 
      </div>
    </>
  )
}

export default PageRenderModule