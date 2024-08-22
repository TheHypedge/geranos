import React, { useEffect } from 'react'
import BlogRenderModule from './BlogRenderModule'
import { Button } from '@/components/ui/button';
import NotFound from '@/components/custom/Global/PageNotFound'

export const revalidate = 10;

const Page = async({ params }:any) => {

    const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/posts?acf_format=standard&_fields=id,slug,title,content,acf&slug=${params.slug}`); 
    const blogs = await req.json(); 
    const blog = blogs[0];

    if(blog != undefined){
      return <BlogRenderModule pageData={blog}/> 
    }
    else {
      return <NotFound/>
    }

}

export default Page