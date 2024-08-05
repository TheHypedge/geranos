'use client'

import React from 'react'
import { useEffect } from 'react';

const PageRenderModule = (props: any) => {

 let test = props.pageData



  return (       

        <div className="max-w-[800px] m-auto px-2">

        <div className="text-4xl text-left font-bold py-[80px]">{props.pageData.title.rendered}</div>
        <div className="postContParaFixCstm text-left" dangerouslySetInnerHTML={{__html: props.pageData.content.rendered}}/>

 
    </div>
  )
}

export default PageRenderModule