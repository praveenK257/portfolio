import React, { useState } from 'react'

import './NavBar.css'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = ({currRoute}) => {
  
  const [expanded, setExpanded] = useState(false)

  const toggleNav = ()=>{
    const navWrapper = document.querySelector('.navWrapper')
    const containers = document.querySelectorAll('.container')
    if(expanded){
      navWrapper.classList.remove('expand')
      containers.forEach(cont=> cont.classList.remove('expand'))
    }else{
      navWrapper.classList.add('expand')
      containers.forEach(cont=> cont.classList.add('expand'))
    }
    setExpanded(!expanded)
  }

  return (
    <div className='navWrapper'>
      <nav> 
        <div className='logoWrapper'>
          <div className='logo'>
            <img src={Logo} alt='NavLogo'/>
            <svg onClick={toggleNav} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg> 
          </div>
          <div className='name'>
            <h3>Praveen Kumar</h3>
            <h5>Software Developer</h5>
            <h5>Zoho Corporation</h5>
          </div>
        </div>
        
        <div className='navItemsWrapper'>
          <ul className='navItems'>
            <li className='navItem' data-id='home' title="Home">
              <Link to={`/home`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg>
                <span>Home</span>
              </Link>
            </li>
            <li className='navItem' data-id='about' title="About Me">
              <Link to={`/about`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path></svg>
                <span>About</span>
              </Link>
            </li>
            <li className='navItem' data-id='skills' title="My Skills">
              <Link to={`/skills`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.293 6.293 2.586 12l5.707 5.707 1.414-1.414L5.414 12l4.293-4.293zm7.414 11.414L21.414 12l-5.707-5.707-1.414 1.414L18.586 12l-4.293 4.293z"></path></svg>
                <span>Skills</span>
              </Link>
            </li>
            <li className='navItem' data-id='experience' title="WorkExperience">
              <Link to={`/experience`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM6 8h2v11H6V8zm12 11h-2V8h2v11zM15 4v2H9V4h6z"></path></svg>
                <span>Experience</span>
              </Link>
            </li>
            <li className='navItem' data-id='portfolio' title="Portfolio">
              <Link to={`/portfolio`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 6h14v2H5zm2-4h10v2H7z"></path></svg>
                <span>Portfolio</span>
              </Link>
            </li>
            <li className='navItem' data-id='contact' title="Contact me">
              <Link to={`/contact`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2zm-6 11H7v-2h7v2zm3-4H7V7h10v2z"></path></svg>
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        
      </nav>
    </div>
  )
}

export default NavBar;