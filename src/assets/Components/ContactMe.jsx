

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut", 
      delay: 0.2 
    }
  },
};

function ContactMe() {
  const [focusField, setFocusField] = useState('');
  const [hoverField, setHoverField] = useState('');

  const handleMouseEnter = (field) => {
    setHoverField(field);
  };

  const handleMouseLeave = () => {
    setHoverField('');
  };

  return (
    <motion.div 
      className='pb-12'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className='my-12 text-center text-4xl font-semibold text-slate-400'>
        Get in Touch
      </h2>
      
      {/* Contact Information Section */}
      <motion.div 
        className='flex flex-col items-center'
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p className='text-slate-300-900 text-lg leading-relaxed tracking-tighter mb-6'>
          I'd love to hear from you! Reach out to me through the following methods:
        </p>
        
        {/* Contact Info */}
        <motion.div 
          className='p-4 rounded-lg shadow-md text-center max-w-md'
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Email */}
          <div className='mb-4'>
            <h3 className='text-md font-medium text-white'>Email</h3>
            <p className='text-sm text-lime-200'>digantagowala123@example.com</p>
          </div>
          
          {/* Phone */}
          <div className='mb-4'>
            <h3 className='text-md font-medium text-white'>Phone</h3>
            <p className='text-sm text-lime-200'>91+8974299257</p>
          </div>
          
          {/* Contact Form */}
          <div className='mt-3'>
            <h3 className='text-md font-medium text-blue-300'>Send a Message</h3>
            <form className='mt-4'>
              <input
                type='text'
                placeholder='Your Name'
                className={`w-full mb-2 p-2 bg-black text-white ${focusField === 'name' || hoverField === 'name' ? 'opacity-100' : 'opacity-0'}`}
                onFocus={() => setFocusField('name')}
                onBlur={() => setFocusField('')}
                onMouseEnter={() => handleMouseEnter('name')}
                onMouseLeave={handleMouseLeave}
              />
              <input
                type='email'
                placeholder='Your Email'
                className={`w-full mb-2 p-2 bg-black border-zinc-700 text-white ${focusField === 'email' || hoverField === 'email' ? 'opacity-100' : 'opacity-0'}`}
                onFocus={() => setFocusField('email')}
                onBlur={() => setFocusField('')}
                onMouseEnter={() => handleMouseEnter('email')}
                onMouseLeave={handleMouseLeave}
              />
              <textarea
                placeholder='Your Message'
                className={`w-full mb-2 p-2 bg-black text-white ${focusField === 'message' || hoverField === 'message' ? 'opacity-100' : 'opacity-0'}`}
                onFocus={() => setFocusField('message')}
                onBlur={() => setFocusField('')}
                onMouseEnter={() => handleMouseEnter('message')}
                onMouseLeave={handleMouseLeave}
              ></textarea>
              <button
                type='submit'
                className='bg-blue-100 text-white px-4 py-2 rounded bg-transparent hover:bg-blue-900 transition'>
                Send
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactMe;
