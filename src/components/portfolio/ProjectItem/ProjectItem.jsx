import React from 'react'
import './ProjectItem.css'

function ProjectItem({project}) {
  
  const openProject = () => {
    window.open(project.url)
  } 

  return (
    <div className='project-item card'>
        <div className='project-header'>
            <span className='project-link'>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="300%" viewBox="0 0 100 125" x="0px" y="0px" onClick={openProject}>
                    <path d="M73.9,28.1a.3.3,0,0,1-.1-.2c-.1-.2-.1-.3-.2-.4v-.2l-.8-.8h-.2l-.4-.2H52.3a3,3,0,0,0,0,6H63.8L50.5,45.3a2.9,2.9,0,0,0,0,4.2,3,3,0,0,0,2.1.9,2.7,2.7,0,0,0,2.1-.9L68,36.2V47.7a3,3,0,0,0,6,0V29a1.3,1.3,0,0,0-.1-.6Z"/>
                    <path d="M62.8,68H32V37.3H42.1v-6H29a2.9,2.9,0,0,0-3,3V71a2.9,2.9,0,0,0,3,3H65.8a3,3,0,0,0,3-3V57.9h-6Z"/>
                </svg>
            </span>
            <span className='sub-title'>{project.name}</span>
        </div>
        <div className='project-body'>
            <span>{project.description}</span>
        </div>
        <div className='project-footer'>
            <div className='project-tech-stack language'> 
                <span className='highlight'>Languages</span>
                {project.languages.map(l => <span key={l} className='tag'>{l}</span>)}
            </div>
            <div className='project-tech-stack framework'>  
                <span className='highlight'>Server</span>
                {project.techstack.server.frameworks.map(f => <span key={f} className='tag'>{f}</span>)}
            </div>
        </div>
    </div>
  )
}

export default ProjectItem