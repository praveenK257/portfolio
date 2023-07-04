import React from 'react'
import { Link } from 'react-router-dom';

import './Home.css'
import PraveenDP from '../../assets/praveen.jpg'
import downloadResume from '../../utils/downloadResume';

const Home = (props) => {
  return (
    <>
      <main className='container home '>
        <section className='hello'>
          <div className='home-item dp'>
            <img src={PraveenDP} alt='Praveen Profile Picture'></img>
          </div>
          <div className='home-item intro'>
            <h3>Hi there . I'm</h3>
            <h1>Praveen Kumar</h1>
            <h3 className='tag'>Software Developer</h3>
            <p>I'm interested in Fullstack Web development & Artificial Intelligence</p>
            {/* <hr/> */}
            <div className='home-action'>
              <a className='button' onClick={downloadResume} href=''>Download CV</a>
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