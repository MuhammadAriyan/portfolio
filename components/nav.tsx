import React from 'react'

const Navbar = () => {
  return (
    <nav>
    <span ><CodeXml className="icon"/></span>
    <ul className="nav-ul">
      <li ><span onClick={()=>{
        document.body.classList.add('blackOpacity')
      }} className="nav-li-about">About</span></li>
      <li ><span className="nav-li-contact">Contact</span></li>
    </ul>
  </nav>
  )
}

export default Navbar