import React from 'react'
import './ContactBody.css'

const ContactBody = () => {
  return (
    <div className='contact_form'>
        <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message'></textarea>
            <button>Send a message</button>
        </form>
    </div>
  )
}

export default ContactBody