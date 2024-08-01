import React from 'react'
import Link from 'next/link'

const DestinationsMenu = () => {
  return (
<div className="flex gap-4 text-md">

        <p className="">Destinations : </p>
        <Link href="/contact">
        <p>Punjab</p>
        </Link>
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Uttarakhand</p>
        </Link> 
        



    </div>
  )
}

export default DestinationsMenu