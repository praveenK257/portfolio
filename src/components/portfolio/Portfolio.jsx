import React from 'react'
import { Link } from 'react-router-dom';
import './Portfolio.css'
import ProjectItem from './ProjectItem/ProjectItem';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      name: 'CORS Proxy Server',
      languages: ['Typescript'],
      techstack: {
        server: {
          frameworks: ['Node.js', 'Express']
        },
        client: {
          frameworks: []
        },
        database: {
          databases: []
        }
      },
      description: "A CORS proxy server that can be used to communicate with services directly from the browser or just used as a proxy",
      url: "https://github.com/praveenK257/cors-server"
    }
  ]

  return (
    <>
      <main className='container portfolio '>
        <section>
          <h1><span></span> <span>PORTFOLIO</span></h1>
          <div className='wrapper portfolio'>
            {
              (projects.length === 0) ? <h4>WORK IN PROGRESS</h4> :
                <div className='projects-wrapper'>
                  {projects.map(project => {
                    return <ProjectItem key={project.id} project={project}/>
                  })}
                </div>
            }
            
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