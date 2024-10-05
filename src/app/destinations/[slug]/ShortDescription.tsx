import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import Image from 'next/image'

export const revalidate = 10

const ShortDescription = async(props:any) => {


  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/destinations?acf_format=standard&_fields=id,title,acf&slug=${props.slug}`, { cache: 'no-store' } ); 
  const destinations = await req.json(); 
  const destination = await destinations[0];

  return (
    <div className="relative w-full sm:p-4 mt-8">

    <div className="bg-slate-50  rounded-3xl max-w-[800px] mx-auto flex aling-middle justify-center gap-6 text-center flex-col  p-2 py-6 mx-2 md:px-16 md:py-12">
    <h1 className="text-4xl font-EduVICWANTBeginner">{destination.acf.short_description.title}</h1>
      <p className="text-sm sm:text-base">
        {destination.acf.short_description.short_description}
      </p>
      <Link href={`/deep-dive/${props.slug}`}>
      <Button variant="outline" className="max-w-min mx-auto bg-none">Explore More</Button>
      </Link>
    </div>

    </div>
  )
}

export default ShortDescription