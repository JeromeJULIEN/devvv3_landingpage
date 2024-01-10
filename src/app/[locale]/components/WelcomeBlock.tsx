import React, { useRef } from 'react'
import Particles from './particles'
import Image from 'next/image'
import downArrow from "public/downArrow.png"
import InlineText from './InlineText'
import dev from "public/logo_dev.png"
import chevron from "public/logo_chevron.png"
import vv3 from "public/logo_vv3.png"
import MeetingButton from './MeetingButton'
import {useTranslations} from 'next-intl';
import Offerblock from './Offerblock'


type Props = {}

const WelcomeBlock = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const scrollToRef = () => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: "smooth", block: "end"});
        }
      }

  const t = useTranslations('WelcomeBlock')


  return (
    <div className='relative flex flex-col gap-10 items-center px-2 py-10 pt-0 w-full min-h-screen'>
        <Particles
            className="absolute inset-0 -z-10  h-full"
            quantity={250}
        />

        <div className='flex flex-col gap-10 justify-between items-center min-h-screen p-10 text-white'>
            <div className='flex-grow'></div>
            <div className='h-16'></div>
            <div className="relative w-72 sm:w-1/2 -translate-y-20 md:-translate-y-36 ">
                <Image src={chevron} alt="logo_devvv3" className='absolute animate-fade-in'/>
                <Image src={dev} alt="logo_devvv3" className='absolute animate-move-up'/>
                <Image src={vv3} alt="logo_devvv3" className='absolute animate-move-down'/>
            </div>
            <h1 className='text-lg md:text-2xl font-light tracking-wider animate-fade-in'>blockchain | web3 | mobile app </h1>
            <h2 className='text-neutral-400  md:w-2/3 text-center animate-fade-in'>{t('headline')}</h2>
            <button onClick={scrollToRef}><Image src={downArrow} alt='downArrow' width={50} height={50} className='animate-fade-in'/></button>
            <div  className='flex-grow'></div>
        </div>
        <div>
            <InlineText direction={2}/>
            <InlineText direction={-1} />
            <InlineText direction={1}/>
            <InlineText direction={-2} />
        </div>
        <div className='flex flex-col gap-10 items-center'>
            <p className='mt-10 text-neutral-300 font-light w-3/4 md:w-2/3 text-center'>{t('intro')}</p>
            <p className='text-neutral-300 font-bold w-3/4 md:w-2/3 text-center'>{t('list')}</p>
            <Offerblock/>
            <p className='text-neutral-300 pt-10 font-light md:w-2/3 text-center'>{t('callToAction')}</p>
            <MeetingButton/>
        </div>
        
        <div ref={ref}></div>
    </div>
  )
}

export default WelcomeBlock