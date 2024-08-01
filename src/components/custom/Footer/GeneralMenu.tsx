import React from 'react'
import Link from 'next/link'

const GeneralMenu = () => {
  return (
    <div className="flex gap-4 text-sm">


<Link href="/contact">
        <p>Home</p>
        </Link>
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>About</p>
        </Link> 
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Contact</p>
        </Link>         
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>T&C</p>
        </Link> 
        <p className="text-[#f2f2f2]">|</p>
        <Link href="/contact">
        <p>Privacy Policy</p>
        </Link> 

    </div>
  )
}

export default GeneralMenu