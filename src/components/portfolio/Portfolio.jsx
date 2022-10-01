import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <main className='container portfolio '>
        <section>
          <h1><span></span> <span>PORTFOLIO</span></h1>
          <div className='wrapper portfolio'>
            <h4>WORK IN PROGRESS</h4>
          </div>
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