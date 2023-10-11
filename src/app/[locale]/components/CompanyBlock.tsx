import Image from 'next/image'
import React from 'react'
import profilPic from "../../../../public/profilPic.png"
import SocialNetworkCard from './SocialNetworkCard'
import MeetingButton from './MeetingButton'
import Footer from './Footer'
import socialData from '../data/socialData'
import email from '/public/social/email.png'
import phone from '/public/social/phone.png'
import {useTranslations} from "next-intl"

type Props = {}

const CompanyBlock = (props: Props) => {
    const t= useTranslations("CompanyBlock")
  return (
    <div className='flex flex-col gap-10 items-center px-4 pt-10 bg-white w-full min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; {t('title').toUpperCase()} /&gt;</h2>
        <p className='text-neutral-500 px-4 md:w-2/3 text-center'>{t('intro1')}</p>
        <p className='text-neutral-500 px-4 md:w-2/3 text-center'>
        {t('intro2')}
        </p>
        <h3 className='text-xl font-semibold text-center tracking-widest'>{t('basedIn').toUpperCase()} <strong className='text-cyan-500 font-semibold'>MARSEILLE, FRANCE</strong></h3>
        <h2 className='text-3xl md:text-4xl font-semibold text-center mt-10'>&lt; {t('theTeam').toUpperCase()} /&gt;</h2>
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='flex gap-4 items-center'>
                <Image src={profilPic} alt="profil picture" width={100} className='rounded-full w-30 sm:w-40'/>
                <div className='fex flex-col gap-4 items-start justify-between'>
                    <p>Jérôme</p>
                    <p className='font-light'>{t('jeromeProfile')}</p>
                </div>
            </div>
            <div className='flex gap-2 sm:gap-10 items-baseline justify-start flex-wrap'>
                {socialData.map((site,index) =>
                    <SocialNetworkCard key={index} name={site.name} logo={site.logo} link={site.link}/>   
                )}
            
            </div>

        </div>
        <h2 className='text-3xl md:text-4xl font-semibold text-center mt-10 -mb-10'>&lt; CONTACT /&gt;</h2>

        <MeetingButton/>
        <div className='flex gap-10'>
            <a href="mailto:jerome@devvv3.com?subject=Prise de contract depuis le site devvv3.com" target='_blank'>
                <div className='flex flex-col items-center justify-center gap-2 w-20'>
                    <Image src={email} alt="logo" width={50} />
                    <p className='text-xs tracking-widest text-center'>{t('email').toUpperCase()}</p>
                </div>
            </a>
            <a href="tel:+33664345553">
                <div className='flex flex-col items-center justify-center gap-2 w-20'>
                    <Image src={phone} alt="logo" width={50} />
                    <p className='text-xs tracking-widest text-center'>+33 6 64 34 55 53</p>
                </div>
            </a>

        </div>
        <Footer/>
    </div>
  )
}

export default CompanyBlock