import React from 'react'
import { Separator } from "@/components/ui/separator"

const LastBarRight = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap h-5 items-center space-x-4 text-sm font-medium uppercase tracking-wider">
        <div className="ml-0">Privacy Policy</div>
        <Separator orientation="vertical" />
        <div>Terms Of Use</div>

     
      </div>
    </div>
  )
}

export default LastBarRight