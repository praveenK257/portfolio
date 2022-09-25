import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <main className='container portfolio '>
        <section>
          
        </section>
        <div className='prev-route'>
          <Link to={`/experience`}>Work Experience</Link>
        </div>
        <div className='next-route'>
          <Link to={`/contact`}>Contact me</Link>
        </div>
      </main>
    </>
  )
}

export default Portfolio;