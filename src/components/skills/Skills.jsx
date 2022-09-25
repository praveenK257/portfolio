import React from 'react'
import { Link } from 'react-router-dom';
import './Skills.css'

const Skills = () => {
  return (
    <>
      <main className='container skills '>
        <section>
          <h1><span>MY</span> <span>SKILLS</span></h1>
        </section>
        <div className='prev-route'>
          <Link to={`/about`}>About me</Link>
        </div>
        <div className='next-route'>
          <Link to={`/experience`}>Work Experience</Link>
        </div>
      </main>
    </>
  )
}

export default Skills;