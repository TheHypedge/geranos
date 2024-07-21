import React from 'react'
import Image from 'next/image'
import MainNavigation from './mainNavigation'

const Header = () => {
  return (
    <div className="flex flex-row align-middle justify-between px-4 py-2">
    <Image src="/global/logo.png" width="200" height="200" alt="logo"/>        
    <MainNavigation/>

    </div>
  )
}

export default Header