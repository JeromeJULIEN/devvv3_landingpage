'use client'
import ProjectBlock from './components/ProjectBlock'
import StackBlock from './components/StackBlock'
import ProfileBlock from './components/CompanyBlock'
import WelcomeBlock from './components/WelcomeBlock'
import LanguageSwitcher from './components/LanguageSwitcher'
import CompanyBlock from './components/CompanyBlock'

export default function Home() {
  return (
   <main id="main" className='flex flex-col justify-center items-center  overflow-hidden'>
    <div className='flex justify-end w-full'>
        <LanguageSwitcher/>

    </div>
      <WelcomeBlock/>
      <ProjectBlock/>
      <StackBlock/>
      <CompanyBlock/>
   </main>
  )
}
