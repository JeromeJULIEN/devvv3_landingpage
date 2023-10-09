import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projectData'
import {useTranslations} from 'next-intl'

type Props = {}

const ProjectBlock = (props: Props) => {

  const t = useTranslations("ProjectBlock")
  return (
    <div className='flex flex-col gap-10 items-center px-4 py-10 bg-white w-full min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; {t('title').toUpperCase()} /&gt;</h2>
        <p className='text-neutral-500 font-light w-3/4 md:w-2/3 text-center'>{t('intro')}</p>
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-20 w-full'>
            {projects.map((project,index) => 
                <ProjectCard key={index} image={project.imageMain} title={project.name} description={project.description} slug={project.slug}/> 
            )}
        </div>

    </div>
  )
}

export default ProjectBlock