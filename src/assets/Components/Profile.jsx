
import React from 'react';
import buntuimg from '../../assets/Components/Buntuimg.JPG'; 
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  } 
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
} 

function Profile() {
  return (
    <div className='pb-4 mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:p-8'>
            <motion.img 
              src={buntuimg} 
              alt="Profile" 
              className='border border-stone-900 rounded-2xl'
              width={650}
              height={650} 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex flex-col items-center lg:items-start mt-10'
          >
            <motion.h2 
              className='pb-2 text-4xl lg:text-4xl tracking-tighter'
              variants={childVariants}
            >
              Diganta Gowala
            </motion.h2>
            <motion.span 
              className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'
              variants={childVariants}
            >
              Frontend Developer
            </motion.span>
            <motion.p 
              className='my-2 mx-w-lg py-6 text-xl leading-relaxed tracking-tighter'
              variants={childVariants}
            >
              I’m a Frontend Developer with 90 days of internship experience using React.js and Tailwind CSS to build responsive and stylish web applications. I’ve effectively translated design concepts into user-friendly interfaces and am currently expanding my skills with Next.js to enhance performance and SEO. I’m passionate about creating exceptional digital experiences and continuously learning new technologies.
            </motion.p>
            <motion.a 
              href='Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-sm text-stone-950 mb-10'
              variants={childVariants}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Profile;