import React from 'react'


import Image from 'next/image'
import TextAndImageImage from './TextAndImageImage'
import TextAndImageText from './TextAndImageText'


const TextAndImage = (props:any) => {
  return (
    <div className="max-w-[1200px] flex m-auto w-full">
        <div className="flex gap-16 flex-col justify-between w-full xl:flex-row p-4 py-12 pb-0">
        {
          ((props.imagePostion) === "left") &&
              <TextAndImageImage/>
        }    
        
        <TextAndImageText 
        titleText={props.titleText} 
        subHeading={props.subHeading} 
        content={props.content}
        ctaText={props.ctaText}
        ctaLink={props.ctaLink}
        />

        {
          ((props.imagePostion) === "right") &&
              <TextAndImageImage/>
        }  
            


        </div>
    </div>
  )
}

export default TextAndImage