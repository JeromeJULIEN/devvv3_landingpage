import React, { useRef } from 'react'
import Particles from './particles'
import Image from 'next/image'
import downArrow from "../../../public/downArrow.png"
import InlineText from './InlineText'
import dev from "../../../public/logo_dev.png"
import chevron from "../../../public/logo_chevron.png"
import vv3 from "../../../public/logo_vv3.png"
import MeetingButton from './MeetingButton'

type Props = {}

const WelcomeBlock = (props: Props) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const scrollToRef = () => {
        if(ref.current){
            ref.current.scrollIntoView({ behavior: "smooth", block: "end"});
        }
      }

  return (
    <div className='relative flex flex-col gap-10 items-center px-2 py-10 pt-0 w-full min-h-screen'>
        <Particles
            className="absolute inset-0 -z-10  h-full"
            quantity={500}
        />
        <div className='flex flex-col gap-10 justify-between items-center min-h-screen p-10 text-white'>
            <div className='flex-grow'></div>
            <div className='h-16'></div>
            <div className="relative w-72 sm:w-1/2 -translate-y-20 md:-translate-y-36 ">
                <Image src={chevron} alt="logo_chevron" className='absolute animate-fade-in'/>
                <Image src={dev} alt="logo_dev" className='absolute animate-move-up'/>
                <Image src={vv3} alt="logo_vv3" className='absolute animate-move-down'/>
            </div>
            <h1 className='text-lg md:text-2xl font-light tracking-wider animate-fade-in'>blockchain | web3 | mobile app </h1>
            <h2 className='text-neutral-400  md:w-2/3 text-center animate-fade-in'>Construisez les futurs usages numériques avec les technologies du web3, de la blockchain et des applications mobiles</h2>
            <button onClick={scrollToRef}><Image src={downArrow} alt='downArrow' width={50} height={50} className='animate-fade-in'/></button>
            <div  className='flex-grow'></div>
        </div>
        <div>
            <InlineText direction={2}/>
            <InlineText direction={-1} />
            <InlineText direction={1}/>
            <InlineText direction={-2} />
        </div>
        <p className='mt-10 text-neutral-300 font-light w-3/4 md:w-2/3 text-center'>Chez devvv3, nous sommes spécialisés en développement fullstack web3 et iOS. Notre équipe est dédiée à donner vie à vos projets, qu&apos;il s&apos;agisse d&apos;un accompagnement global ou d&apos;une expertise ciblée.</p>
        <p className='text-neutral-300 font-bold w-3/4 md:w-2/3 text-center'>Smart contract | front-end web3 | marketplace | actif numérique | app mobile ios</p>
        <p className='text-neutral-300  font-light md:w-2/3 text-center'>Une idée ? Une question ? Parlons-en !</p>
        <MeetingButton/>
        <div ref={ref}></div>
    </div>
  )
}

export default WelcomeBlock