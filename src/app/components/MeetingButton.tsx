'use client'
import React, { useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly';

type Props = {}

const MeetingButton = (props: Props) => {
    // Logic to avoid error document==undefined on server side rendering 
    // -> UseEffect will be run only on client side
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
    useEffect(() => {
        setRootElement(document.getElementById('main'));
    }, []);
  
    const [isCalendlyOpen,setIsCalendlyOpen] = useState(false)

    const toggleCalendly =() =>{
        setIsCalendlyOpen(!isCalendlyOpen)
    }

  return (
    <>
        <button className='px-8 py-2 my-10 rounded-full bg-cyan-500  text-white  text-2xl hover:bg-cyan-300 hover:font-light hover:px-9 transition-all duration-200' onClick={toggleCalendly}>Prendre un rdv</button>
        <PopupModal
                    url="https://calendly.com/jerome-devvv3"
                    onModalClose={toggleCalendly}
                    open={isCalendlyOpen}
                    rootElement={rootElement!}
        />
    </>
    )
}

export default MeetingButton