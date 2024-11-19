'use client'
import React from 'react'
import { CodeXml } from 'lucide-react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='navbar'>
    <Link href='/' ><CodeXml className="icon"/></Link>
    <ul className="nav-ul">
      <li ><Link href='/about' className="nav-li-about">About</Link></li>
      <li ><Link href='/contact' className="nav-li-contact">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default Navbar