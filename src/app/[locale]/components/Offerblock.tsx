import React from 'react'
import OfferStarter from './OfferStarter'
import OfferBooster from './OfferBooster'
import OfferPrime from './OfferPrime'

type Props = {}

const Offerblock = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-10 text-white px-10 pt-10' id='offer'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; OUR OFFERS /&gt;</h2>
        <div className='flex flex-col md:flex-row item-center gap-16 md:gap-10'>
            <OfferStarter/>
            <OfferBooster/>
            <OfferPrime/>
        </div>
    </div>
  )
}

export default Offerblock