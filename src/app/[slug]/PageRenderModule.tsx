'use client'

import React from 'react'
import { useEffect } from 'react';

const PageRenderModule = (props: any) => {

 let test = props.pageData

  useEffect(() => {
    console.log(test); 
  }, []);


  return (       

        <div className="max-w-[800px] m-auto px-2">

        <div className="text-4xl text-left font-bold py-[80px]">test</div>
        <div className="postContParaFixCstm text-left" dangerouslySetInnerHTML={{__html: "<h1>test</h1>"}}/>

 
    </div>
  )
}

export default PageRenderModule