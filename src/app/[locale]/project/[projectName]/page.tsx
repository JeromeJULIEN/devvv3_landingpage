'use client'
import React, { useState } from 'react'
import projects from '../../data/projectData'
import Image from 'next/image'
import {useTranslations,useLocale} from 'next-intl';


type Props = {
    params : {
        projectName : string
    }
}

const ProjectPage = (props: Props) => {
    const locale = useLocale()
    const t = useTranslations('projects')
    const project = projects.find(p => p.slug === props.params.projectName)

    if (!project) {
        return <div className=' bg-white w-full min-h-screen'>Projet non trouvé</div>;
      }

      const [isImageLoading, setIsImageLoading] = useState(false);
      const setImageLoadingFalse = ()=> {
        setIsImageLoading(false)
      }


    return (
        <div className=' bg-white w-full min-h-screen flex flex-col gap-4 items-start'>            
            <h1 className='text-3xl md:text-4xl tracking-widest'>&lt; {t(`${props.params.projectName}.name`).toUpperCase()} /&gt;</h1>
            <h2 className='text-xl md:text-2xl font-light text-neutral-500 tracking-widest pb-10'>{t(`${props.params.projectName}.description`)}</h2>
            <div className='flex flex-col md:flex-row gap-10'>
                {/* {isImageLoading ? 
                <div className='w-full md:w-1/4 bg-neutral-300 animate-pulse'></div>
                : */}
                <Image src={project.image} alt={`${project.name} main image`} className={`w-full md:w-1/4 object-contain ${isImageLoading ? "bg-neutral-300 animate-pulse":""}`} onLoad={() => setIsImageLoading(false)}/>  
                {/* } */}
                {project.secondImage !== undefined && 
                <Image src={project.secondImage} alt={`${project.name} second image`} className='w-full md:w-1/4 object-contain'/> }
                <div className='flex flex-col gap-2 md:w-1/2'>
                    <h3 className='text-2xl font-light tracking-widest'>Description</h3>
                    <main className='font-extralight text-neutral-500'>{t(`${props.params.projectName}.detail1`)}</main>
                    {project.detail2 !== undefined && <p className='font-extralight text-neutral-500'>{t(`${props.params.projectName}.detail2`)}</p> }
                    <h3 className='text-2xl font-light tracking-widest pt-10'>{locale === "en" ? "Technical Stack" : "Stack technique"}</h3>
                    <div className='flex flex-col gap-1 font-extralight text-neutral-500'>
                        {project.stack.map(soft => 
                            <p key={soft}>{soft}</p>    
                        )}
                    </div>
                    <p className='flex-grow'></p>
                    {project.link !== undefined &&
                    <a href={project.link} target='_blank' >
                        <button className='px-8 py-2 mt-10 rounded-full bg-cyan-500  text-white text-2xl w-full md:w-1/2 hover:bg-cyan-300 hover:font-light hover:px-9 transition-all duration-200'>{locale === "en" ? "Visit the website" : "Visiter le site"}</button>
                    </a>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectPage