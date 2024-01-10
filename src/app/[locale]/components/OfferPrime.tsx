import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {}

const OfferPrime = (props: Props) => {
    const t = useTranslations('offer')


    return (
        <div className='flex flex-col item-center gap-4 text-white md:w-1/3'>
            <h3 className='text-3xl'><strong>Prime kit : </strong>{t('prime.headline')}</h3>
            <h4 className='text-xl text-cyan-500 pb-6'>{t('prime.price')}<strong> 9900€</strong></h4>
            <p><strong>&#x2714; </strong>{t('prime.description1')}</p>
            <p><strong>&#x2714; </strong>{t('prime.description2')}</p>
            <p><strong>&#x2714; </strong>{t('prime.description3')}</p>
            <p><strong>&#x2714; </strong>{t('prime.description4')}</p>
            <p><strong>&#x2714; </strong>{t('prime.description5')}</p>

        </div>
    )
}

export default OfferPrime