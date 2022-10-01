import React from 'react'
import { Link } from 'react-router-dom';
import CustomForm from '../common/form/CustomForm';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <main className='container contact '>
        <section>
          <h1><span>SAY</span> <span>HELLO!</span></h1>
          <div className='wrapper contact'>
            <div className="email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path></svg>
              <h4>apraveenkumar25701@gmail.com</h4>
            </div>
            <div className="contact-form">
              <CustomForm type='contact'/>
            </div>
          </div>
        </section>
        <div className='prev-route contact'>
          <Link to={`/portfolio`}>Portfolio</Link>
        </div>
      </main>
    </>
  )
}

export default Contact;