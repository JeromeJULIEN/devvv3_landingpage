import Image from 'next/image'
import React from 'react'
import profilPic from "../../../public/profilPic.png"
import linkedin from "../../../public/logo/linkedin.png"
import SocialNetworkCard from './SocialNetworkCard'
import MeetingButton from './MeetingButton'
import Footer from './Footer'

type Props = {}

const ProfileBlock = (props: Props) => {
  return (
    <div className='flex flex-col gap-10 items-center px-4 pt-10 bg-white w-full min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; PLUS SUR MOI /&gt;</h2>
        <p className='text-neutral-500 w-3/4 md:w-2/3 text-center'>Passionné de technologie blockchain et ios, je suis convaincu par les impacts long terme de la décentralisation et de la digitalisation.</p>
        <p className='text-neutral-500 w-3/4 md:w-2/3 text-center'>
        Je mets à profit mes compétences techniques ainsi que mes expériences passées en tant que manager et chef de projet R&D pour développer les applications de demain.
        </p>
        <Image src={profilPic} alt="profil picture" width={250} className='rounded-full'/>
        <h3 className='text-2xl font-semibold text-center tracking-widest'>BAS&Eacute; SUR <span className='text-cyan-500'>MARSEILLE, FRANCE</span></h3>
        <div className='flex gap-4 items-center justify-center flex-wrap pt-10'>
            <SocialNetworkCard logo={linkedin} name='linkedin' link='https://www.linkedin.com/in/jerome-0x-dev/'/>
            <SocialNetworkCard logo={linkedin} name='linkedin' link='https://www.linkedin.com/in/jerome-0x-dev/'/>
            <SocialNetworkCard logo={linkedin} name='linkedin' link='https://www.linkedin.com/in/jerome-0x-dev/'/>
            <SocialNetworkCard logo={linkedin} name='linkedin' link='https://www.linkedin.com/in/jerome-0x-dev/'/>
        </div>
        <MeetingButton/>
        <Footer/>
    </div>
  )
}

export default ProfileBlock