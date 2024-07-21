import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex flex-row align-middle justify-between px-4 py-2">
    <Image src="/global/logo.png" width="200" height="200" alt="logo"/>        
    <div className="flex align-middle">Header</div>

    </div>
  )
}

export default Header