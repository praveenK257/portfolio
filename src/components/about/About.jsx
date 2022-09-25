import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
      <main className='container about '>
        <section>
          
        </section>
        <div className='prev-route'>
          <Link to={`/home`}>Home</Link>
        </div>
        <div className='next-route'>
          <Link to={`/skills`}>My Skills</Link>
        </div>
      </main>
    </>
  )
}

export default About