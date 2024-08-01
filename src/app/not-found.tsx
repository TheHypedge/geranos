import React from 'react'
import ErrorImage from '@/app/404.svg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  return (
    <div className="min-h-[440px] flex flex-col text-center align-center justify-center">

      <Image className="m-auto" src={ErrorImage} alt="404 Error Image" width="300" height="400"/>
      <p>Error 404: Page not found</p>
      <Button className="max-w-min m-auto">Go To Home</Button>
    </div>
  )
}

export default NotFound