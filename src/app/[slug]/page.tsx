import React, { useEffect } from 'react'
import PageRenderModule from './PageRenderModule'
import { Button } from '@/components/ui/button';
import PageNotFound from '@/components/custom/Global/PageNotFound'

export const revalidate = 10

const Pages = async({ params } : {params:any}) => {



    const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/pages?acf_format=standard&_fields=id,slug,title,content,acf&slug=${params.slug}`); 
    const pages = await req.json(); 
    const page = pages[0];

    if(page != undefined){
      return <PageRenderModule pageData={page}/> 
    }
    else {
      return <PageNotFound/>
    }




}

export default Pages