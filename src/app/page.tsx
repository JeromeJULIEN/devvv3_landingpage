'use client'
import Image from 'next/image'
import Particles from './components/particles'
import devvv3 from "../../public/devvv3.png"
import downArrow from "../../public/downArrow.png"
import InlineText from './components/InlineText'

export default function Home() {
  return (
   <main className='flex flex-col justify-center items-center gap-10 overflow-hidden'>
    <Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1000}
			/>
    <div className='flex flex-col gap-10 justify-between items-center min-h-screen p-10 text-white'>
      <div className='flex-grow'></div>
      <Image src={devvv3} alt="devvv3" className='w-2/3 md:w-1/2'/>
      <h1 className='text-lg md:text-2xl font-light tracking-widest'>blockchain | web3 | mobile app </h1>
      <h2 className='text-neutral-400 w-3/4 md:w-2/3 text-center'>Construisez les futurs usages numériques avec les technologies du web3, de la blockchain et des applications mobiles</h2>
      <div className='flex-grow'></div>

      <Image src={downArrow} alt='downArrow' width={50} height={50}/>
    </div>
    <div>
      <InlineText direction={2}/>
      <InlineText direction={-1} />
      <InlineText direction={1}/>
      <InlineText direction={-2} />
    </div>
    <p className='mt-10 text-neutral-400 w-3/4 md:w-2/3 text-center'>Développeur fullstack web3 et ios, je suis là pour pour aider à construire votre projet, que ce soit sur tout le scope technique ou bien sur une thématique spécifique.<br/>Une idée ? Une question ? Parlons-en !</p>
    <button className='px-6 py-2 mt-10 rounded-full bg-cyan-500 text-white  text-xl'>Prendre un rdv</button>
    <div className='bg-white w-full min-h-screen'>
      test
    </div>
   </main>
  )
}
