import { AppWindowMac, MoonStar, Terminal } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div >
      <div className='main-content-div'>
      <h1 className='main-heading top-section'>
        MUHAMMAD ARYAN
      </h1>
      <p className='main-para'>
        I am Muhammad Aryan, a digital dreamer, weaving code and design into stories that captivate and inspire
      </p>
      <div className='main-icons top-section'>
      <Terminal className='main-icon'/>
      <AppWindowMac className='main-icon'/>
      <MoonStar className='main-icon' />
      </div>
      </div>
    </div>
  )
}

export default Page