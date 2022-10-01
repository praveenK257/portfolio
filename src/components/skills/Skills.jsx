import React from 'react'
import { Link } from 'react-router-dom';
import './Skills.css'

const Skills = () => {
  const skills = [
    {title: "PROGRAMMING LANGUAGES", name: ["JAVASCRIPT","JAVA","SCALA"]},
    {title: "FRONTEND", name: ["REACT","WEB DESIGN","JQUERY","CSS","HTML"]},
    {title: "BACKEND", name: ["SPRING FRAMEWORK","JSP","MYSQL","POSTGRES"]},
    {title: "TOOLS", name: ["ADOBE PHOTOSHOP"] },
    {title: "OTHER INTERESTS", name: ["MACHINE LEARNING"] }
  ]
  
  return (
    <>
      <main className='container skills '>
        <section>
          <h1><span>MY</span> <span>SKILLS</span></h1>
          <div className="wrapper skills">
            {skills.map((skill, ind)=>(
              <div className="skills-container" key={ind}>
                <h4 className='sub-title'>{skill.title}</h4>
                <div className="skills">
                  {skill.name.map((name, nameInd)=>(
                    <span key={'skill-'+ind+'-'+nameInd} className='tag skill'>{name}</span>
                  ))}
                </div>
                {(ind !== skills.length - 1)?<hr/>:<hr style={{display: 'none'}}/>} 
              </div>
            ))}
          </div>
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