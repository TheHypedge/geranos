import React from 'react'


import HeroBanner from './HeroBanner'
import ShortDescription from './ShortDescription'
import DataCards from './DataCards'
import AllItenarySlider from './AllItenarySlider'
import ItinerarySlider from './ItinerarySlider'

export const revalidate = 10;

const Destinations = async({params}:any) => {

  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/itineraries?acf_format=standard&_fields=id,title,acf&_slug=${params.slug}`, { cache: 'no-store' }); 
  const itineraries = await req.json(); 


  

  return (
    <div>
        
        
 

        <HeroBanner slug={params.slug}/>
        test
        <ShortDescription/>
        <DataCards/>


          <ItinerarySlider 
          itineraries={itineraries} 
          destinationFilterSlug={params.slug}
          offeringFilterSlug="Tour Packages"
          />


          <ItinerarySlider 
          itineraries={itineraries} 
          destinationFilterSlug={params.slug}
          offeringFilterSlug="Weekend Getaways"
          />


          <ItinerarySlider 
          itineraries={itineraries} 
          destinationFilterSlug={params.slug}
          offeringFilterSlug="Experiences"
          />




    


    </div>
  )
}

export default Destinations