import React from 'react'
import { Link } from 'react-router-dom';
import './Experience.css'

const Experience = () => {
  return (
    <>
      <main className='container experience '>
        <section>
          
        </section>
        <div className='prev-route'>
          <Link to={`/skills`}>My skills</Link>
        </div>
        <div className='next-route'>
          <Link to={`/portfolio`}>Portfolio</Link>
        </div>
      </main>
    </>
  )
}

export default Experience;