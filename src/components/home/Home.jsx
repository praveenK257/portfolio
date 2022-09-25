import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css'
import PraveenDP from '../../assets/praveen.jpg'

const Home = (props) => {
  return (
    <>
      <main className='container home '>
        <section className='hello'>
          <div className='home-item dp'>
            <img src={PraveenDP}></img>
          </div>
          <div className='home-item intro'>
            <h4>Hi there . I'm</h4>
            <h2>Praveen Kumar</h2>
            <h4 className='tag'>Software Developer</h4>
            <p>I'm interested in interested in Fullstack Web development & Artificial Intelligence</p>
            {/* <hr/> */}
            <div className='home-action'>
              <a className='button' href=''>Download CV</a>
              <Link className='button' to={`/contact`}>Say hi</Link>
            </div>
          </div>
        </section>
        <div className='next-route'>
          <Link to={`/about`}>About Me</Link>
        </div>
      </main>
    </>
  )
}

export default Home;