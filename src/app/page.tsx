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
   <main id="main" className='flex flex-col justify-center items-center gap-20 overflow-hidden'>
    <WelcomeBlock/>
    <ProjectBlock/>
    <StackBlock/>
    <ProfileBlock/>
   </main>
  )
}
