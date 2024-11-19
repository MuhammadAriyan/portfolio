import React from 'react'
import '@/app/about/about.css'
import Link from 'next/link'
import { Cookie } from 'lucide-react'
const page = () => {
  return (
    <div className=''>
      <h1 className='aboutMe-heading top-section'>About me<Cookie className='cookie'/></h1>
      <div>
        <div className="aboutMe-para top-section">
          <p>Hey there! I’m
            <span style={{ color: 'blueviolet', fontWeight: 'bold' }} > Muhammmad Aryan</span>
            , a 16-year-old developer and UI/UX enthusiast from Pakistan with a deep love for coding and design. I’m currently shaping my skills in front-end development, with a focus on turning creative ideas into smooth, user-friendly web experiences.
            <br /><br />
            I’m passionate about UI/UX design and bringing a bit of an anime vibe into my creations, inspired by one of my favorite films, Your Name. I also enjoy experimenting with new tech, and I’m all about deploying projects and sharing them online, with Vercel as my go-to platform.
            <br /><br />
            Besides coding, I’m into exploring the concept of building worlds through visuals and interactions, aiming to create a bit of magic in every project I take on. You could say I live by <span style={{ color: 'blueviolet', fontWeight: 'bold' }} >“Code, Design, and Dream”</span> (<span style={{ color: 'blueviolet', fontWeight: 'bold' }} >…with some sleep in between!</span>).
            <br /><br />
            If you’re looking for someone who blends technical skill with an eye for design, let’s <Link href={'/contact'} className='connect'>connect</Link> and create something unique together!</p>
        </div>
      </div>
    </div>
  )
}

export default page