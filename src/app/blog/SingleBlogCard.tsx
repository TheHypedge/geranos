import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const SingleBlogCard = ({title, key, date, excerpt, slug, image}:any) => {


  let d = new Date(date);
  
  return (
    <div key={key} className="flex flex-col md:flex-row max-w-6xl m-auto py-8 px-4 sm:px-8 gap-8 border-b-2">

        <div className="flex flex-col gap-4 align-middle justify-center">
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <p className="text-slate-400 text-sm md:text-md">{d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()}</p>
            <div className="text-md md:text-md xl:text-xl"
            dangerouslySetInnerHTML={{__html: excerpt}}
            />
            <Link href={`/blog/${slug}`}>
                <Button className="bg-[#2F6BEB]">Read Blog</Button>
            </Link>
        </div>

        <div className="flex flex-col order-[-1] md:order-1 gap-4 align-middle justify-center md:min-w-[280px] xl:min-w-[320px]">
            <Image src={image} width="400" height="400" alt="blog thumbnail" className="m-auto rounded-xl mx-h-[200px] sm:max-h-full"/>
        </div>


    </div>
  )
}

export default SingleBlogCard