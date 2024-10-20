import React from 'react'
import { CONTACT } from '../constants/cons'

const Contact = () => {
  return <div className="border-b border-neutral-500 border-dashed pb-4">
      <h1 className="text-center text-4xl my-8">Get In Touch</h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>
            {CONTACT.address}
        </p>
        <a href='tel:+917821012715' className='my-4'>{CONTACT.phoneNo}</a>
        <br />
        <a href="mailto:yashmali0913@gmail.com" className='my-4'>{CONTACT.email}</a>

      </div>

    </div>
  
}

export default Contact
