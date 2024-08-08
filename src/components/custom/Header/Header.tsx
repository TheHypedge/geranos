import React from 'react'
import Image from 'next/image'
import MainNavigation from './mainNavigation'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import Link from 'next/link';


const Header = () => {
  return (
    <div className="border-t-[10px] border-[#246BEB] fixed top-0 z-50 w-full bg-white min-h-[90px] flex flex-row align-middle justify-between px-6 py-2">
    <Link href="/">
    <Image src="/global/logo.png" width="200" height="200" alt="logo"/>        
    </Link>

    <MainNavigation/>



    <div className="mt-2">
   <AlgoliaBlueButton ctaText="Plan A Trip" ctaLink="/"/>
   </div>

    </div>
  )
}

export default Header
