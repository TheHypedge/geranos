import React from 'react'
import Link from 'next/link'

const ExperiencesMenu = () => {
  return (
<div className="flex gap-4 text-md">

<p className="text-[#EB1F25]">Experiences : </p>
<Link href="/contact">
        <p>Cultural</p>
        </Link>
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Farmstay</p>
        </Link> 
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Village life</p>
        </Link>         
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Nature Trails</p>
        </Link> 


    </div>
  )
}

export default ExperiencesMenu