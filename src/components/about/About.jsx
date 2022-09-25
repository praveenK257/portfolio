import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <>
      <main className='container about '>
        <section className='about'>
          <h1><span>ABOUT</span> <span>ME</span></h1>
          <div className='aboutme-wrapper'>
            <div className="aboutme">
              <p>I'm a Software Developer currently working at <span className='highlight'>Zoho Corporation</span>. I work on building a 
                Web Application based out on the Machine Learning domain. </p>
                
              <p>During this time, I had implemented features mainly focused on Javascript and Scala. 
                I have used <span className='highlight'>Frontend Javascript Frameworks</span> and <span className='highlight'>SVG's</span> . 
                I had also built backend API's for some features using <span className='highlight'>Scala</span> and <span className='highlight'>Spring Framework</span>.</p>
                
              <p>My current goal is to learn more about Web Application development & become a capable <span className='highlight'>full stack
                developer</span>. </p>

              <p>I also have some interest in <span className='highlight'>Machine Learning</span> and hope to learn more in the coming years.</p>
            </div>
          </div>
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