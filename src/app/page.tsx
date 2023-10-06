'use client'
import ProjectBlock from './components/ProjectBlock'
import StackBlock from './components/StackBlock'
import ProfileBlock from './components/ProfileBlock'
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
