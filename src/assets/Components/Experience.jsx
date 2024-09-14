


import React from 'react';
import { motion } from 'framer-motion';

// Define animation variants
const experienceVariants = {
  hidden: { opacity: 0, x: -10 }, // Slightly off to the left
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      x: {
        type: "spring", 
        stiffness: 10,  // Lower stiffness for very smooth motion
        damping: 10,    // Less damping for more pronounced effect
        duration: 10,   // Longer duration for very slow movement
        repeat: Infinity, // Continuous motion
        repeatType: "mirror", // Mirror effect for left and right movement
      },
      opacity: { duration: 0.5 } // Fade-in effect
    }
  },
};



function Experience() {
  const experienceData = [
    {
      year: 'May 2024 - August 2024',
      position: 'Frontend Developer - Arachiz Pvt Ltd',
      duration: '90 days',
      description: 'Contributed to the development of a responsive web application designed to gather and showcase user testimonials and feedback. Collaborated with a cross-functional team to implement features such as video recording, submission forms, and user-friendly interfaces using ReactJS and Tailwind CSS. Streamlined the feedback process to enhance user engagement and optimize performance.',
      stack: ['ReactJS', 'TailwindCSS']
    }
  ];

  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div className='Internship'>
        {experienceData.map((experience, index) => (
          <motion.div 
            key={index} 
            className='flex flex-wrap lg:justify-between mb-8'
            initial="hidden"
            whileInView="visible"
            variants={experienceVariants}
            viewport={{ once: true }}
          >
            {/* Left side: Year */}
            <div className='w-full lg:w-1/4 text-left'>
              <p className='mb-2 text-sm text-stone-400'>{experience.year}</p>
            </div>
            {/* Right side: Description and Tech Stack */}
            <div className='w-full lg:w-3/4'>
              <h3 className='text-lg font-bold'>{experience.position}</h3>
              <p className='text-sm text-stone-600 mb-2'>{experience.duration}</p>
              <p className='my-2 mx-w-lg py-6 text-xl leading-relaxed tracking-tighter'>{experience.description}</p> {/* Lighter and more spaced */}
              
              {/* Tech Stack styled like buttons (but not buttons) */}
              <div className='flex space-x-2'>
                {experience.stack.map((tech, i) => (
                  <span key={i} className='bg-gray-800 text-white px-2 py-1 rounded-full text-sm'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
