import React, { useState } from 'react'

import './CustomForm.css'
import $ from 'jquery'

export default function CustomForm({type}) {
  
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState('')

  const url = 'https://script.google.com/macros/s/AKfycbyQRA75V-_rqsSAJRes6yMh5sSa9iQ--_8HdnbV0MovT2CxwQs-Y35UumKmVkKc3TpalQ/exec'
  const method = 'POST'

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
    <form method={method} action={url}>
      <label>
        
        <input type="text" id={type+"name"} name={type+"name"} placeholder="Your name..." value={inputs[type+"name"] || ""} onChange={handleChange}/>
      </label>  <br/>
      <label>
        <input type="email" id={type+"email"} name={type+"email"} placeholder="you@example.com" value={inputs[type+"email"] || ""} onChange={handleChange}/>
      </label> <br/>
      <label>
        <textarea type="text" id={type+"subject"} name={type+"subject"} placeholder="Your message..." value={message} onChange={handleChange}/>
      </label><br/>

      <input type="submit" id={type+"submit"} className='button'value="SEND MESSAGE"/>
    </form>
    
  )
}
