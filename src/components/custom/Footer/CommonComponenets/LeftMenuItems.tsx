import React from 'react'
import Link from 'next/link'

const LeftMenuItems = () => {
  return (
    <div className="flex flex-col gap-4">

  <ul className="flex flex-col gap-2 text-left font-UrbanistLight tracking-wide">
    <Link href="/our-vision" className="flex">
        <li>Vision</li>
    </Link>
    <Link href="/our-mission" className="flex">
        <li className="flex">Mission</li>
    </Link>
    <Link href="/our-logo" className="flex">
        <li className="flex">Logo Description</li>
    </Link>
  </ul>
  </div>
         
  )
}

export default LeftMenuItems