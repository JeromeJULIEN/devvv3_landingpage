import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image : StaticImageData,
    title : string,
    description : string
}

const ProjectCard = (props: Props) => {
  return (
    <div className='flex flex-col item-center  w-3/4 md:w-1/4'>
        <Image src={props.image} alt="image" className='pb-2 hover:opacity-70 transition-all duration-200'/>
        <p className='font-bold text-center'>{props.title.toUpperCase()}</p>
        <p className='font-light text-center'>{props.description}</p>
    </div>
  )
}

export default ProjectCard