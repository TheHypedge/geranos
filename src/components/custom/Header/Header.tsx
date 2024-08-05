import React from 'react'
import Image from 'next/image'
import MainNavigation from './mainNavigation'

const Header = () => {
  return (
    <div className="border-t-[10px] border-[#246BEB] fixed top-0 z-50 w-full bg-white min-h-[90px] flex flex-row align-middle justify-between px-6 py-2">
    <Image src="/global/logo.png" width="200" height="200" alt="logo"/>        
    <MainNavigation/>

    </div>
  )
}

export default Header
