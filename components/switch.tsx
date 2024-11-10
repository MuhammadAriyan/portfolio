'use client'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import { sleep } from './transitionLink'


const Switch = () => {
    const [icon,setIcon] = useState(<Sun/>)
    const [theme,SetTheme] = useState('light')
    const changeTheme = async()=>{
        const sIcon = document.getElementById('sIcon')
        if (!sIcon) return
        sIcon?.classList.add('iconswitchInitial')
        await sleep(500)
        document.body.classList.toggle('light')
        if(theme === 'light'){
            setIcon(<Moon />)
            SetTheme('dark')
        }else{
            setIcon(<Sun/>)
            SetTheme('light')
        }
        sIcon?.classList.remove('iconswitchInitial')
        requestAnimationFrame(()=>{
            sIcon?.classList.add('iconswitchFinal')
        })
        await sleep(500)
        sIcon?.classList.remove('iconswitchFinal')
    }
  return (
    <div className='bg-p'>
        <button className='btn-theme' id='sIcon' onClick={changeTheme}>{icon}</button>
    </div>
  )
}

export default Switch