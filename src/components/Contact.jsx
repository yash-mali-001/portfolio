import React from 'react'
import { CONTACT } from '../constants/cons'
import { motion } from "framer-motion";

const Contact = () => {
  return <div className="pb-4">
    <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
      className="text-center text-4xl my-8">Get In Touch</motion.h1>
    <div className='text-center tracking-tighter'>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className='my-4'>
        {CONTACT.address}
      </motion.p>

      <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}>

        <a href='tel:+917821012715' className='my-4'
          viewport={{ once: true, margin: '-10%' }}
        >{CONTACT.phoneNo}</a>

      </motion.div>

      <br />

      <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}>
        <a href="mailto:yashmali0913@gmail.com" className='my-4'
          viewport={{ once: true, margin: '-10%' }}
        >{CONTACT.email}</a>

      </motion.div>


    </div>

  </div>

}

export default Contact
