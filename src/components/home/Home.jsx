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
            <h4>Hello. I'm</h4>
            <h1>Praveen Kumar</h1>
            <h4 className='text-light'>Software Developer</h4>
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