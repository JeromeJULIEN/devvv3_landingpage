import Image from 'next/image'
import React from 'react'
import profilPic from "../../../public/profilPic.png"
import SocialNetworkCard from './SocialNetworkCard'
import MeetingButton from './MeetingButton'
import Footer from './Footer'
import socialData from '../data/socialData'
import email from '../../../public/social/email.png'

type Props = {}

const ProfileBlock = (props: Props) => {
  return (
    <div className='flex flex-col gap-10 items-center px-4 pt-10 bg-white w-full min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; DEVVV3 EN BREF /&gt;</h2>
        <p className='text-neutral-500 px-4 md:w-2/3 text-center'>Passionnés par les technologies blockchain et iOS, nous sommes fermement convaincus des impacts à long terme de la décentralisation et de la digitalisation.</p>
        <p className='text-neutral-500 px-4 md:w-2/3 text-center'>
        Nous combinons notre expertise technique avec notre expérience en gestion de projets et en recherche & développement pour créer les applications de demain.
        </p>
        <h3 className='text-xl font-semibold text-center tracking-widest'>BAS&Eacute; SUR <span className='text-cyan-500'>MARSEILLE, FRANCE</span></h3>
        <h2 className='text-3xl md:text-4xl font-semibold text-center mt-10'>&lt; L'EQUIPE /&gt;</h2>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='flex gap-4 items-center'>
                <Image src={profilPic} alt="profil picture" width={100} className='rounded-full w-30 sm:w-40'/>
                <div className='fex flex-col gap-4 items-start justify-between'>
                    <p>Jérôme</p>
                    <p className='font-light'>Développeur web3 et IOS </p>
                </div>
            </div>
            <div className='flex gap-2 sm:gap-10 items-baseline justify-start flex-wrap'>
                {socialData.map((site,index) =>
                    <SocialNetworkCard key={index} name={site.name} logo={site.logo} link={site.link}/>   
                )}
            
            </div>

        </div>
        <h2 className='text-3xl md:text-4xl font-semibold text-center mt-10'>&lt; CONTACT /&gt;</h2>

        <MeetingButton/>
        <a href="mailto:jerome.devvv3@gmail.com?subject=Prise de contract depuis le site devvv3.com" target='_blank'>
            <div className='flex flex-col items-center justify-center gap-2 w-20'>
                <Image src={email} alt="logo" width={50} />
                <p className='text-xs tracking-widest text-center'>ENVOYER UN EMAIL</p>
            </div>
        </a>
        <Footer/>
    </div>
  )
}

export default ProfileBlock