import React from 'react'
import Particles from './particles'
import ts from "../../../public/logo/ts.png"
import StackCard from './StackCard'

type Props = {}

const StackBlock = (props: Props) => {
  return (
    <div className='relative flex flex-col gap-10 items-center px-4 py-10 pt-0 w-full min-h-screen'>
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in h-full"
            quantity={500}
        />
        <h2 className='text-3xl md:text-4xl font-semibold text-white text-center'>&lt; STACK TECHNIQUE /&gt;</h2>
        <p className='mt-10 text-neutral-300 font-light w-3/4 md:w-2/3 text-center'>J’utilise l’ensemble des outils les plus performants pour le développement de projet et me forme en permanence aux dernières évolutions</p>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'><span className='text-cyan-500'>FRONT-END WEB3</span> / APP DECENTRALIS&Eacute;E </h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
        </div>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'>BLOCKCHAIN / <span className='text-cyan-500'>SMART CONTRACT</span></h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
        </div>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'>APPLICATION <span className='text-cyan-500'>MOBILE IOS</span></h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            <StackCard logo={ts} name="typescript"/>
            <StackCard logo={ts} name="typescript"/>
        </div>
    </div>
  )
}

export default StackBlock