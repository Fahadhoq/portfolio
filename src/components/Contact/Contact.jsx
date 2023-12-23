import { useState } from 'react';
import './contact.scss'

export default function Contact() {
  const [msg,setMsg] = useState(false)

  const handleSubmit = (e)=>{
     e.preventDefault();
     setMsg(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className='left'>
         <img src="assets/imgbin-computer-icons-drop-down-list-arrow-symbol-direction-orientation-4mxJciLQ6f6BQiGSrr3Vz03sG.jpg" />
      </div>
      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type='submit'>Send</button>
          {msg && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  )
}
