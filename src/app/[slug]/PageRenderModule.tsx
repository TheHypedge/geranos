'use client'

import React from 'react'
import { useEffect } from 'react';

import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'


const PageRenderModule = (props: any) => {





  return (       

<>


    <Image src={props.pageData.acf.featured_image} width="1920" height="800" alt="Featured Image" className="absolute max-h-[420px] object-cover bg-cover  min-h-[420px] bg-slate-50"/>
    <div className="bg-[rgba(0,0,0,0.3)] flex aling-middle justify-center gap-6 text-center flex-col min-h-[420px] px-4 py-12 z-10">
    <h1 className="text-white text-5xl font-semibold">{props.pageData.title.rendered}</h1>
    <p className="text-white text-xl">We are happy to assist journeys and life experiences!</p>
    

    </div>







        <div className="max-w-[800px] m-auto px-2 pt-16 pb-8">

      
        <div className="postContParaFixCstm text-left" dangerouslySetInnerHTML={{__html: props.pageData.content.rendered}}/>

 
    </div>
    </>
  )
}

export default PageRenderModule