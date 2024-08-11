import React from 'react'
import { Separator } from "@/components/ui/separator"

const LastBarLeft = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap h-5 items-center space-x-4 text-sm font-medium uppercase tracking-wider">
        <div>Contact</div>
        <Separator orientation="vertical" />
        <div>Sitemap</div>        
      </div>
    </div>
  )
}

export default LastBarLeft