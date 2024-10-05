import React from 'react'
import Image from 'next/image'

export const revalidate = 10

const DataCards = async(props:any) => {


  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/destinations?acf_format=standard&_fields=acf&slug=${props.slug}`, { cache: 'no-store' } ); 
  const destinations = await req.json(); 
  const destination = destinations[0];

  return (
    <div className="relative w-full sm:p-4 mt-4 px-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 max-w-[1200px] mx-auto aling-middle justify-center text-center rounded-3xl  px-4 py-12">


        <div className="flex flex-col gap-2">
            <DataCardImage url="/global/cards/about-1.png" alt="Travel For"/>
            <p className="font-bold mt-2 text-sm md:text-base">Travel For</p>
            <p className="mx-8 text-sm">{destination.acf.cards.travel_for}</p>
        </div>

        <div className="flex flex-col gap-2">
            <DataCardImage url="/global/cards/about-2.png" alt="Travel For"/>
            <p className="font-bold mt-2 text-sm md:text-base">Best Time To Visit</p>
            <p className="mx-8 text-sm">{destination.acf.cards.best_time}</p>
        </div>

        <div className="flex flex-col gap-2">
            <DataCardImage url="/global/cards/about-3.png" alt="Travel For"/>
            <p className="font-bold mt-2 text-sm md:text-base">Speak</p>
            <p className="mx-8 text-sm">{destination.acf.cards.speak}</p>
        </div>

        <div className="flex flex-col gap-2">
            <DataCardImage url="/global/cards/about-4.png" alt="Travel For"/>
            <p className="font-bold mt-2 text-sm md:text-base">Currency</p>
            <p className="mx-8 text-sm">{destination.acf.cards.currency}</p>
        </div>


        </div>
    </div>
  )
}

function DataCardImage(props:any) {
    return (
    
        <Image 
        src={props.url} 
        alt={props.alt} 
        width="512" 
        height="512"
        className="max-w-[80px] mx-auto rounded-3xl"
        />
      
    )

}


export default DataCards