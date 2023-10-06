'use client'
import Image from 'next/image'
import Particles from './components/particles'
import devvv3 from "../../public/devvv3.png"
import downArrow from "../../public/downArrow.png"
import InlineText from './components/InlineText'
import ProjectBlock from './components/ProjectBlock'
import StackBlock from './components/StackBlock'
import ProfileBlock from './components/ProfileBlock'
import MeetingButton from './components/MeetingButton'
import WelcomeBlock from './components/WelcomeBlock'

export default function Home() {
  return (
   <main id="main" className='flex flex-col justify-center items-center gap-10 overflow-hidden'>
    {/* <Particles
				className="absolute inset-0 -z-10 animate-fade-in h-full"
				quantity={500}
			/>
      
    <div className='flex flex-col gap-10 justify-between items-center min-h-screen p-10 text-white'>
      <div className='flex-grow'></div>
      <Image src={devvv3} alt="devvv3" className='w-full md:w-1/2'/>
      <h1 className='text-lg md:text-2xl font-light tracking-wider'>blockchain | web3 | mobile app </h1>
      <h2 className='text-neutral-400 w-3/4 md:w-2/3 text-center'>Construisez les futurs usages numériques avec les technologies du web3, de la blockchain et des applications mobiles</h2>
      <Image src={downArrow} alt='downArrow' width={50} height={50}/>
      <div className='flex-grow'></div>

    </div>
    <div>
      <InlineText direction={2}/>
      <InlineText direction={-1} />
      <InlineText direction={1}/>
      <InlineText direction={-2} />
    </div>
    <p className='mt-10 text-neutral-300 font-light w-3/4 md:w-2/3 text-center'>Développeur fullstack web3 et ios, je vous aide à construire votre projet, que ce soit sur tout le scope technique ou bien sur une thématique spécifique.</p>
    <p className='text-neutral-300 font-bold w-3/4 md:w-2/3 text-center'>Smart contract | front-end web3 | marketplace | actif nuémrique | app mobile ios</p>
    <p className='text-neutral-300 w-3/4 font-light md:w-2/3 text-center'>Une idée ? Une question ? Parlons-en !</p> */}
    <WelcomeBlock/>
    <MeetingButton/>
    <ProjectBlock/>
    <StackBlock/>
    <ProfileBlock/>
   </main>
  )
}
