import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const TravelNews = () => {
  return (

    <div className="flex flex-col gap-4">
      <p className="font-UrbanistLight tracking-wide">Stay updated with recent travel news from around the world.</p>
      <Link href="https://tourism.gov.in/" target="_blank" className="max-w-min"><Button variant="outline" className="max-w-min">Lastest News</Button></Link>
      </div>

  )
}

export default TravelNews