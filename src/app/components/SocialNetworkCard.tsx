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
      <div className='flex flex-col items-center gap-2'>
          <Image src={props.logo} alt="logo" width={50} />
          <p className='text-xs tracking-widest first:tracking-widest'>{props.name.toUpperCase()}</p>
      </div>
    </a>
  )
}

export default SocialNetworkCard