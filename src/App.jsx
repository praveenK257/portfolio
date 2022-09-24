import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Footer from './components/footer/Footer'

import './styles.css'

const App = () => {
  const location = useLocation();
  const [currRoute, setCurrRoute] = useState('')

  useLayoutEffect(() => {
    let pathname = location.pathname.substring(1)
    if(pathname !== currRoute){
      // setting selected state in navbar
      setCurrRoute(pathname)
      document.querySelectorAll('.navItem').forEach((item)=>{
        if(item.getAttribute('data-id') === pathname){
          item.classList.add('selected')
        }
        else{
          item.classList.remove('selected')
        } 
      })
    }
    // adjusting container
    let navWrapper = document.querySelector('.navWrapper')
    if(navWrapper && navWrapper.classList.contains('expand')){
      document.querySelector('.container').classList.add('expand')
    }
  }, [location.pathname]);


  return (
    <>
      <NavBar currRoute={currRoute}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/experience' element={<Experience />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App