import axios from 'axios';
import React, { useState } from 'react'

import './CustomForm.css'

export default function CustomForm({type}) {
  
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('')

  const url = 'https://script.google.com/macros/s/AKfycbyQRA75V-_rqsSAJRes6yMh5sSa9iQ--_8HdnbV0MovT2CxwQs-Y35UumKmVkKc3TpalQ/exec'
  const method = 'POST'

  const sendReqToGoogleSheets = ( event )=>{
    event.preventDefault()
    if(message.length == 0 || Object.keys(inputs).length < 2 ){
      alert('Please enter valid data in all fields')
    }
    else{
      document.getElementById('contactForm').submit()
    }
  }

  const handleChange = (event)=>{
    event.preventDefault();
    if(event.target.outerHTML.includes('input')){
      const name = event.target.name;
      const value = event.target.value;
      setInputs({...inputs, [name]: value})
    }
    else{
      setMessage(event.target.value)
    }
    
  }

  return (
    <form method={method} action={url} target="_blank" id="contactForm">
      <label>
        
        <input type="text" id={type+"name"} name={type+"name"} placeholder="Your name..." value={inputs[type+"name"] || ""} onChange={handleChange}/>
      </label>  <br/>
      <label>
        <input type="email" id={type+"email"} name={type+"email"} placeholder="you@example.com" value={inputs[type+"email"] || ""} onChange={handleChange}/>
      </label> <br/>
      <label>
        <textarea type="text" id={type+"subject"} name={type+"subject"} placeholder="Your message..." value={message} onChange={handleChange}/>
      </label><br/>

      <input type="button" id={type+"submit"} className='button' value="SEND MESSAGE" onClick={sendReqToGoogleSheets}/>
    </form>
    
  )
}
