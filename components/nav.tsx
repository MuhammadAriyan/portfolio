'use client'
import React from 'react'
import { CodeXml } from 'lucide-react'
import TransitionLink from './transitionLink'
const Navbar = () => {
  return (
    <nav>
    <TransitionLink href='/' ><CodeXml className="icon"/></TransitionLink>
    <ul className="nav-ul">
      <li ><TransitionLink href='/about' className="nav-li-about">About</TransitionLink></li>
      <li ><TransitionLink href='/contact' className="nav-li-contact">Contact</TransitionLink></li>
    </ul>
  </nav>
  )
}

export default Navbar