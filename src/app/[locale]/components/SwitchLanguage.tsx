'use client'
import React, { useState } from 'react'

type Props = {}

const SwitchLanguageBtn = (props: Props) => {
    const [language, setLanguage] = useState("fr")

    const switchLanguage = () => {
        if (language === "fr") {
            setLanguage("en")
        } else if (language === "en") {
            setLanguage("fr")
        }
    }

  return (
    <div>
        <button onClick={switchLanguage} className='text-white'>{language}</button>
    </div>
  )
}

export default SwitchLanguageBtn