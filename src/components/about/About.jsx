import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

import Timeline from '../common/timeline/Timeline'

const About = () => {

  const interests = [{name: 'FullStack Web Development'}, { name: 'Web Applications'},
                     {name: 'Artificial Intelligence'},{  name: 'Photo Editing'}, 
                     {name: 'Gaming'}]

  const education = [
                      {institute: "Thiagarajar College of Engineering, Madurai", start: "Jun 2018", end: "May 2022", 
                       course: 'B.E Electronics & Communication Engineering'},
                       {institute: "Devi Matric Higher Secondary School, Palani", start: "2004", end: "2018", 
                       course: 'Higher Secondary Education - School Topper'}
                    ]

  return (
    <>
      <main className='container about '>
        <section className='about'>
          <h1><span>ABOUT</span> <span>ME</span></h1>
          <div className='wrapper aboutme'>
            <div className="text-container">
              <p>I'm a Software Developer currently working at <span className='highlight'>Zoho Corporation</span>. I work on building a 
                Web Application based out on the Machine Learning domain. </p>
                
              <p>During this time, I had implemented features mainly focused on Javascript and Scala. 
                I have used <span className='highlight'>Frontend Javascript Frameworks</span> and <span className='highlight'>SVG's</span> . 
                I had also built backend API's for some features using <span className='highlight'>Scala</span> and <span className='highlight'>Spring Framework</span>.</p>
                
              <p>My current goal is to learn more about Web Application development & become a capable <span className='highlight'>full stack
                developer</span>. </p>

              <p>I also have some interest in <span className='highlight'>Machine Learning</span> and hope to learn more in the coming years.</p>
            </div>

            <div className="education">
              <h4 className='sub-title'>EDUCATION</h4>
              <div className="timeline">
                <Timeline data={education} type="education"/>
              </div>
            </div>

            <div className='interests'>
              <h4 className='sub-title'>INTERESTS</h4>
              <div className="tag-container">
                {
                  interests.map((interest, ind)=>(
                    <div key={ind} className='tag interest'>{interest.name}</div>
                  ))
                }
              </div>
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