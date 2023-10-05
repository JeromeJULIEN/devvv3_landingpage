import React from 'react'
import fleet from '../../../public/fleet.png'
import ProjectCard from './ProjectCard'
import projects from '../data/projectData'

type Props = {}

const ProjectBlock = (props: Props) => {
  return (
    <div className='flex flex-col gap-10 items-center px-4 py-10 bg-white w-full min-h-screen'>
        <h2 className='text-3xl md:text-4xl font-semibold text-center'>&lt; QUELQUES PROJETS /&gt;</h2>
        <p className='text-neutral-500 font-light w-3/4 md:w-2/3 text-center'>Voici quelques-uns de mes derniers projets</p>
        <div className='flex justify-center flex-wrap gap-20 w-full'>
            {projects.map(project => 
                <ProjectCard key={project.name} image={project.image} title={project.name} description={project.description}/>
                
            )}
            <ProjectCard image={fleet} title='fleet collective' description='Site de mint de NFT'/>
            <ProjectCard image={fleet} title='fleet collective' description='Site de mint de NFT'/>
            <ProjectCard image={fleet} title='fleet collective' description='Site de mint de NFT'/>
            <ProjectCard image={fleet} title='fleet collective' description='Site de mint de NFT'/>
            <ProjectCard image={fleet} title='fleet collective' description='Site de mint de NFT'/>
        </div>

    </div>
  )
}

export default ProjectBlock