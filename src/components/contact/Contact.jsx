import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
  return (
    <>
      <main className='container contact '>
        <section>
          
        </section>
        <div className='prev-route contact'>
          <Link to={`/portfolio`}>Portfolio</Link>
        </div>
      </main>
    </>
  )
}

export default Contact;