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
        <>
            <div className=' bg-white w-full min-h-screen'>
                <p>
                    {project.name} - {project.description}
                </p>
                <Image src={project.image} alt="fleet pic"/>  
                {project.secondImage !== undefined && <Image src={project.secondImage} alt="secondImage"/> }
            </div>
        </>
    )
}

export default ProjectPage