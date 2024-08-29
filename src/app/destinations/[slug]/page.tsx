import React from 'react'

/*         <AllItenarySlider itineraries={itineraries} slug={params.slug} StateFilterID="224" OfferingFilterID="Tour Packages"/>
 */ 
import HeroBanner from './HeroBanner'
import ShortDescription from './ShortDescription'
import DataCards from './DataCards'
import AllItenarySlider from './AllItenarySlider'
import ItinerarySlider from './ItinerarySlider'

const Destinations = async({params}:any) => {

  const req = await fetch(`https://dashboard.geranosgetaways.com/wp-json/wp/v2/itineraries?acf_format=standard&_fields=id,title,acf`); 
  const itineraries = await req.json(); 


  

  return (
    <div>
        
        
 

        <HeroBanner pageTitle={params.slug}/>
        <ShortDescription/>
        <DataCards/>

        <p>test1</p>


        <p>test2</p>



        <ItinerarySlider itineraries={itineraries} />


    </div>
  )
}

export default Destinations