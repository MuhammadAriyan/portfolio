'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'


const Switch = () => {
    const [icon,setIcon] = useState(<Sun/>)
    const [theme,SetTheme] = useState('light')
    const changeTheme = ()=>{
        document.body.classList.toggle('light')
        if(theme==='light'){
            setIcon(<Moon/>)
            SetTheme('dark')
        }else{
            setIcon(<Sun/>)
            SetTheme('light')
        }
    }
  return (
    <div>
        <button className='btn-theme' onClick={changeTheme}>{icon}</button>
    </div>
  )
}

export default Switch