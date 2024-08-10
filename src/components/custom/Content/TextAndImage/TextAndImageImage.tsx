import React from 'react'
import Image from 'next/image'

const TextAndImageImage = (props:any) => {
  return (
    <div className={`w-full`}>
    <Image src={props.imageLink} width="800" height="800" alt="Image"/>
</div>
  )
}

export default TextAndImageImage