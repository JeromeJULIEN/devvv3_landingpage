import React from 'react'
import projects from '@/app/data/projectData'
import Image from 'next/image'

type Props = {
    params : {
        projectName : string
    }
}

const ProjectPage = (props: Props) => {

    const project = projects.find(p => p.slug === props.params.projectName)

    if (!project) {
        return <div className=' bg-white w-full min-h-screen'>Projet non trouvé</div>;
      }

    return (
        <div className=' bg-white w-full min-h-screen flex flex-col gap-4 items-start'>
            <h1 className='text-3xl md:text-4xl tracking-widest'>&lt; {project.name.toUpperCase()} /&gt;</h1>
            <h2 className='text-xl md:text-2xl font-light text-neutral-500 tracking-widest pb-10'>{project.description}</h2>
            <div className='flex flex-col md:flex-row gap-10'>
                <Image src={project.image} alt="fleet pic" className='w-full md:w-1/4'/>  
                {project.secondImage !== undefined && <Image src={project.secondImage} alt="secondImage" className='w-full md:w-1/4'/> }
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl font-light tracking-widest'>Description</h3>
                    <p className='font-extralight text-neutral-500'>{project.detail1}</p>
                    {project.detail2 !== undefined && <p className='font-extralight text-neutral-500'>{project.detail2}</p> }
                    <h3 className='text-2xl font-light tracking-widest pt-10'>Stack technique</h3>
                    <div className='flex flex-col gap-1 font-extralight text-neutral-500'>
                        {project.stack.map(soft => 
                            <p key={soft}>{soft}</p>    
                        )}
                    </div>
                    <p className='flex-grow'></p>
                    {project.link !== undefined &&
                    <a href={project.link} target='_blank' >
                        <button className='px-8 py-2 mt-10 rounded-full bg-cyan-500  text-white text-2xl w-full md:w-1/2 hover:bg-cyan-300 hover:font-light hover:px-9 transition-all duration-200'>Visiter le site</button>
                    </a>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectPage