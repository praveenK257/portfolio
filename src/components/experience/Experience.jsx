import React from 'react'
import { Link } from 'react-router-dom';
import Timeline from '../common/timeline/Timeline';
import './Experience.css'

const Experience = () => {

  const work = [
                  {institute: "Zoho Corporation, Chennai", start: "May 2022", end: "Present", 
                  title: 'Member of Technical Staff - Full time', info: ""},
                  {institute: "Zoho Corporation, Chennai", start: "December 2022", end: "May 2022", 
                  title: 'Project Trainee - Internship', info: ""}
                ]

  return (
    <>
      <main className='container experience '>
        <section>
          <h1><span>WORK</span> <span>EXPERIENCE</span></h1>
          <div className="wrapper experience">
            <div className="card">
              <p>I'm currently working as a Full Stack Developer mainly based out on Javascript, Scala and Spring Framework.</p>
            </div>
            <div className="work-timeline">
              <h3 className='sub-title'>WORK HISTORY</h3>
              <div className="timeline">
                <Timeline data={work} type="work-experience"/>
              </div>
            </div>
          </div>
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