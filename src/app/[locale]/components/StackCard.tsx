import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    logo:StaticImageData,
    name : string
}

const StackCard = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-2'>
        <Image src={props.logo} alt="logo" height={75}/>
        <p className='text-white tracking-widest'>{props.name.toUpperCase()}</p>
    </div>
  )
}

export default StackCard