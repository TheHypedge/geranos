import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"


const TravelNews = () => {
  return (

    <div className="flex flex-col gap-4">
      <p>Stay updated with recent travel news from around the world.</p>
      <Button variant="outline" className="max-w-min">Lastest News</Button>
      </div>

  )
}

export default TravelNews