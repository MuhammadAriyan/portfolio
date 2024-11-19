import Instructor from '@/components/instructor'
import { AppWindowMac, BookCopy, MoonStar, Terminal } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <div className=''>
      <div className='main-content-div'>
        <Instructor />
        <h1 className='main-heading top-section'>
          MUHAMMAD ARYAN
        </h1>
        <p className='main-para'>
          I am Muhammad Aryan, a digital dreamer, weaving code and design into stories that captivates and inspires
        </p>
        <div className='main-icons top-section'>
          <Terminal className='main-icon' />
          <AppWindowMac className='main-icon' />
          <MoonStar className='main-icon' />
        </div>
      </div>
      <h1 className='main-heading eduH'>Education<BookCopy className='book'/></h1>
      <div className='education-box'>
        <main className='timeline '>
          <div className='leftBox box'>
            <h2>The Educator</h2>
            <p>2010-2021</p>
            <p>Studied at The Educators till 8th grade, building a strong academic foundation and valuable learning skills.</p>
          </div>
          <div className='rightBox box'>
            <h2>The Fast Educator</h2>
            <p>2021-2023</p>
            <p>Studied at FAST Educator from 8th to 10th grade, further developing academic skills and knowledge.</p>
          </div>
          <div className='leftBox box'>
            <h2>GDBSC College</h2>
            <p>2023-Now</p>
            <p>Currently studying pre-engineering in 12th grade at GDBSC College based in landhi korangi 6, continuing from 11th grade.</p>
          </div>
          <div className='rightBox box'>
            <h2>Applied Generative AI Engineering (GenEng)</h2>
            <p>2024-Now</p>
            <p>I'm in the second quarter of the GenEng program, focused on front-end development with Next.js, TypeScript, and core AI skills.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Page