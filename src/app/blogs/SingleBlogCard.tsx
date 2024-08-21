import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import Link from 'next/link'
const SingleBlogCard = ({title, date, excerpt, slug, image}:any) => {
  return (
    <div className="flex flex-row max-w-6xl m-auto py-8">

        <div className="flex flex-col gap-4 align-middle justify-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            <h1>{date}</h1>
            <div
            dangerouslySetInnerHTML={{__html: excerpt}}
            />
            <Link href={`/blog/${slug}`}>
                <Button>Read Blog</Button>
            </Link>
        </div>

        <div>
            <Image src={image} width="400" height="400" alt="blog thumbnail"/>
        </div>


    </div>
  )
}

export default SingleBlogCard