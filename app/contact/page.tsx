import React from 'react'
import '@/app/contact/contact.css'
import Link from 'next/link'
import { AtSign, GithubIcon, InstagramIcon, Linkedin, Mail, YoutubeIcon } from 'lucide-react'
const Page = () => {
  return (
    <div>
      <h1 className='contact-heading top-section'>CONNECT WITH ME</h1>
      <p className='contact-para top-section'>I’d love to hear from you! Whether you have a project in mind, want to collaborate, or simply want to chat, feel free to reach out. Let's explore new possibilities and create something amazing together. Drop me a message below, and let’s begin our journey!</p>
      <div className='social-icon-set top-section'>
        <Link href={'https://www.instagram.com/maryanrar'} target="_blank"><span className='social-icon' ><InstagramIcon/> Instagram</span></Link>
        <br />
        <Link href={'https://github.com/MuhammadAriyan/'} target="_blank"><span className='social-icon' ><GithubIcon /> Github</span></Link>
        <br />
        <Link href={'https://www.linkedin.com/in/muhammad-aryan'} target="_blank"><span className='social-icon' ><Linkedin/> LinkedIn</span></Link>
        <br />
        <Link href={"https://www.youtube.com/@Aryannn_%C3%B1._.6"} target="_blank"><span className='social-icon' ><YoutubeIcon/> Youtube</span></Link>
        <br />
        <Link href={'mailto:aryan4march@gmail.com'} target='_blank'><span className='social-icon'><AtSign/> Email</span></Link>
      </div>
    </div>
  )
}

export default Page