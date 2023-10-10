import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  logo : StaticImageData,
  name : string,
  link : string
}

const SocialNetworkCard = (props: Props) => {
  return (
    <a href={props.link} target='_blank'>
      <div className='flex flex-col items-center justify-center gap-2 w-14 sm:w-20'>
          <Image src={props.logo} alt={`logo ${props.name}`} width={50} className='w-8 sm:w-14' />
          <p className='text-xs tracking-widest text-center'>{props.name.toUpperCase()}</p>
      </div>
    </a>
  )
}

export default SocialNetworkCard