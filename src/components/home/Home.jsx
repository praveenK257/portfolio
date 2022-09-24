import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <header className='container home'>
      <section className='hello'>
        <h4>Hello. I'm</h4>
        <h1>Praveen Kumar</h1>
        <h4 className='text-light'>Software Developer</h4>
        <div className='home-action'>
          <a href='../../assets/bg.png'>Download CV</a>
          <a href='#contact'>Say Hi..</a>
        </div>
        <div className='home-socials'>
          <ul>
            <li>Linkedin</li>
            <li>Mobile</li>
            <li>Dribble</li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Home;