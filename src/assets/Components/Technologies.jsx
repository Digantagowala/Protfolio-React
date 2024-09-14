import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJsBadge } from 'react-icons/di'; // JavaScript icon
import { SiRedux } from 'react-icons/si'; // Redux icon
import { SiNextdotjs } from 'react-icons/si'; // Next.js icon
import { motion } from 'framer-motion';

// Define the icon animation variants with left-right movement
const iconBounce = {
  hidden: { opacity: 0, x: -30 }, // Start off hidden and to the left
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      x: {
        type: "spring", 
        stiffness: 100, 
        damping: 10,
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror"
      },
      opacity: { duration: 0.5 }
    }
  },
};

function Technologies() {
  return (
    <div className='pb-24'>
      <motion.h2 
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        Technologies
      </motion.h2>
      <div className='flex flex-wrap justify-center'>
        {/* React Icon */}
        <motion.div
          className='p-4'
          variants={iconBounce}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </motion.div>
        </motion.div>

        {/* CSS Icon */}
        <motion.div
          className='p-4'
          variants={iconBounce}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaCss3Alt className='text-7xl text-blue-400' />
          </motion.div>
        </motion.div>

        {/* JavaScript Icon */}
        <motion.div
          className='p-4'
          variants={iconBounce}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DiJsBadge className='text-7xl text-cyan-500' />
          </motion.div>
        </motion.div>

        {/* Redux Icon */}
        <motion.div
          className='p-4'
          variants={iconBounce}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiRedux className='text-7xl text-cyan-600' />
          </motion.div>
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          className='p-4'
          variants={iconBounce}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiNextdotjs className='text-7xl' />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Technologies;



