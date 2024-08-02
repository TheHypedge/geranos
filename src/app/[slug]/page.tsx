

import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react'

export const revalidate = 1

const Pages = async({ params } : {params:any}) => {

    const req = await fetch(`https://grhealthy.in/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug=${params.slug}`); 
    const pages = await req.json(); 
    const page = pages[0];


  return (
    <div className="max-w-[800px] m-auto px-2">

 
            <div className="text-4xl text-left font-bold py-[80px]">{page.title.rendered}</div>
            <div className="postContParaFixCstm mb-2 text-lg text-slate-900" dangerouslySetInnerHTML={{__html: page.content.rendered}}/>

              
  
    </div>    
  )
}

export default Pages