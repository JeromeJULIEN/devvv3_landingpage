'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {
    children : React.ReactNode
}

const ProjectLayout = (props: Props) => {
    const router = useRouter()

  return (
    <div className='flex flex-col bg-white w-full p-10 gap-10'>
        <button className='flex items-center gap-2' onClick={()=>router.back()}>
            <p className='text-2xl'>&lt;&lt;&lt; </p>
            <p className='text-xl'> Retour</p>
        </button>
        {props.children}
    </div>
  )
}

export default ProjectLayout