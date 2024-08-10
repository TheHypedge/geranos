import React from 'react'
import { Separator } from "@/components/ui/separator"

const LastBar = () => {
  return (
    <div className="mb-8">
      <div className="flex h-5 items-center space-x-4 text-sm font-medium uppercase tracking-wider">
        <div>Privacy Policy</div>
        <Separator orientation="vertical" />
        <div>Terms Of Use</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
        <Separator orientation="vertical" />
        <div>Sitemap</div>        
      </div>
    </div>
  )
}

export default LastBar