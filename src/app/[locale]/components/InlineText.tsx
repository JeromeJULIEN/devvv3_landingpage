'use client'
import React from 'react'
import useScrollPosition from '../../../../util/scroll';


type Props = {
  direction: number, // have to be 1 or -1
}

const InlineText = (props: Props) => {
  const scrollY = useScrollPosition();

  const translateXValue: number = scrollY * 0.5 * props.direction;


  return (
    <h3 className='text-4xl md:text-5xl font-semibold text-white whitespace-nowrap'
      style={{ transform: `translateX(${translateXValue}px)` }}><span className='text-black text-edge-outline'>DIGITAL ASSET</span> / SMART CONTRACT / <span className='text-black text-edge-outline'>NFT</span>  /FRONT END  / <span className='text-black text-edge-outline'>MARKETPLACE</span> / SOLANA & ETHEREUM / <span className='text-black text-edge-outline'>WEB3 FULLSTACK APP</span> / DIGITAL ASSET </h3>
  )
}

export default InlineText