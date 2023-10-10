"use client"
import React from 'react'
import {useTranslations} from "next-intl"

type Props = {}

const Footer = (props: Props) => {
  const t= useTranslations("Footer")
  return (
    <footer className='bg-white w-full py-2'>
        <p className='font-light text-xs  w-full text-center'>&copy; devvv3. {t('copyright')}</p>
        <p className='font-light text-xs  w-full text-center'>jerome@devvv3.com / +33 6 64 34 55 53</p>
        <p className='font-light text-xs  w-full text-center'>{t('joke')} &#x2728;&#x2728;&#x2728; </p>

    </footer>
  )
}

export default Footer