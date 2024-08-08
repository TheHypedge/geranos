import React from 'react'
import Image from 'next/image'
import MainNavigation from './mainNavigation'
import AlgoliaBlueButton from "@/components/animata/text/button/algolia-blue-button";
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from '@/components/ui/button';
const Header = () => {
  return (
    <div className="border-t-[10px] border-[#246BEB] fixed top-0 z-50 w-full bg-white min-h-[90px] flex flex-row align-middle justify-between px-2 sm:px-6 py-2">
    
    <Link href="/" className="xl:min-w-[200px] flex flex-col align-start justify-center">
    <Image src="/global/logo.png" width="200" height="200" alt="logo"/>        
    </Link>




    <div className="hidden xl:flex">
    <MainNavigation/>
    </div>


    <div className="flex flex-row gap-8 xl:min-w-[200px] justify-end">


    <div className="flex gap-4 flex-row align-middle justify-center">
      <div className="xl:hidden flex">
      <AlgoliaBlueButton ctaText="+ Trip" ctaLink="/"/>
      </div>
      <div className="xl:flex hidden">
      <AlgoliaBlueButton ctaText="Plan A Trip" ctaLink="/"/>
      </div>
    </div>



   <div className="flex xl:hidden flex-col  align-middle justify-center">





   <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className="text-left mt-4">Are you absolutely sure?</SheetTitle>
      <SheetDescription className="text-left mb-4">
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
      <MainNavigation/>
    </SheetHeader>
  </SheetContent>
</Sheet>









    </div>

   </div>




    </div>
  )
}

export default Header
