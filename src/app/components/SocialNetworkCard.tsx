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
      <div className='flex flex-col items-center justify-center gap-2 w-20'>
          <Image src={props.logo} alt="logo" width={50} />
          <p className='text-xs tracking-widest text-center'>{props.name.toUpperCase()}</p>
      </div>
    </a>
  )
}

export default SocialNetworkCard