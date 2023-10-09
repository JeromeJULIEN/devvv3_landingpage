import React from 'react'
import Particles from './particles'
import StackCard from './StackCard'
import { web3Stack,blockchainStack,iosStack } from '../data/stackData'
import {useTranslations} from 'next-intl'

type Props = {}

const StackBlock = (props: Props) => {
    const t = useTranslations('StackBlock')
  return (
    <div className='relative flex flex-col gap-10 items-center px-4 py-10 w-full min-h-screen'>
        <Particles
            className="absolute inset-0 -z-10 animate-fade-in h-full"
            quantity={500}
        />
        <h2 className='text-3xl md:text-4xl font-semibold text-white text-center'>&lt; {t('title').toUpperCase()} /&gt;</h2>
        <p className='mt-10 text-neutral-300 font-light px-4 md:w-2/3 text-center'>{t('intro')}</p>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'><span className='text-cyan-500'>FRONT-END WEB3</span> / {t("decentralisedApp").toUpperCase()}</h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            {web3Stack.map(soft => 
                <StackCard key={soft.name} logo={soft.logo} name={soft.name}/>
            )}
        </div>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'>BLOCKCHAIN / <span className='text-cyan-500'>SMART CONTRACT</span></h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            {blockchainStack.map(soft => 
                <StackCard key={soft.name} logo={soft.logo} name={soft.name}/>
            )}
        </div>
        <h3 className='text-white text-2xl pt-10 font-semibold text-center'>APPLICATION <span className='text-cyan-500'> IOS</span></h3>
        <div className='flex justify-center gap-10 flex-wrap w-full md:w-1/2'>
            {iosStack.map(soft => 
                <StackCard key={soft.name} logo={soft.logo} name={soft.name}/>
            )}
        </div>
    </div>
  )
}

export default StackBlock