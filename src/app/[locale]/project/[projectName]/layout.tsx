
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import {useLocale} from "next-intl"
import { Metadata } from 'next'

type Props = {
    children : React.ReactNode
}




const ProjectLayout = (props: Props) => {
  const router = useRouter()
  const locale = useLocale()

  return (
    <nav className='flex flex-col bg-white w-full p-10 gap-10'>
        <button className='flex items-center gap-2' onClick={()=>router.back()}>
            <p className='text-2xl'>&lt;&lt;&lt; </p>
            <p className='text-xl'>{locale === "en" ? "Back" : "Retour"} </p>
        </button>
        {props.children}
    </nav>
  )
}

export default ProjectLayout