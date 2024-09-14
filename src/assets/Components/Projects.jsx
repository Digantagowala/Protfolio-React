
import React from 'react';

import EndorseImage from './Endorseimg.png';
import FinguardImage from './Dribbleimg.png';
import NoteImage from './Noteimg.png';

function Projects() {
  
  const projects = [
    {
      name: 'Internship - Endorse.Live',
      image: EndorseImage,
      link: 'https://github.com/Digantagowala/Internship-Endorse.Live',
      description: 'A platform for users to provide video feedback on products and services.',
      technologies: ['HTML', 'CSS', 'ReactJS', 'Tailwind CSS', 'Redux', 'JavaScript'],
      videoLink: 'https://youtu.be/z74JpQa7jl8', 
    },
    {
      name: 'Finguard React Landing',
      image: FinguardImage,
      link: 'https://github.com/Digantagowala/Finguard-Reactlanding',
      description: 'A landing page for the Finguard product showcasing its features and benefits.',
      technologies: ['ReactJS', 'Tailwind CSS'],
    },
    {
      name: 'React Note App',
      image: NoteImage,
      link: 'https://github.com/Digantagowala/ReactNoteApp',
      description: 'A note-taking app with speech recognition for users to record and manage notes.',
      technologies: ['HTML', 'CSS', 'ReactJS', 'Tailwind CSS', 'Speech API'],
    },
  ];

  return (
    <div className="pb-4">
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div className='flex flex-wrap justify-center'>
        {projects.map((project, index) => (
        <div key={index} className='m-4 w-full lg:w-2/3 flex flex-col lg:flex-row items-start'>
            {/* Image Section */}
        <div className='w-full lg:w-1/3 mb-4 lg:mb-0'>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="group">
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                  className='rounded shadow-lg transition-transform duration-300 transform group-hover:scale-105 group-hover:shadow-7xl'
                />
              </a>
            </div>
            {/* Description Section */}
         <div className='w-full lg:w-2/3 lg:pl-6'>
          <h3 className='text-2xl font-semibold mb-2'>{project.name}</h3>
          <p className='mb-4'>{project.description}</p>
          <div className='flex flex-wrap gap-2 mb-4'>
         {project.technologies.map((tech, idx) => (
         <span key={idx} className='bg-gray-800 text-white px-2 py-1 rounded-full text-sm'>
                    {tech}
         </span>
                ))}
         </div>
         {project.videoLink && (
         <div className='mt-4'>
         <h4 className='text-xl font-semibold mb-2'>Project Showcase Video:</h4>
         <iframe
                    width="320" 
                    height="120" 
                    src={`https://www.youtube.com/embed/${project.videoLink.split('v=')[1]}`}
                    title={`${project.name} Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className='w-60 border rounded-md'
                  ></iframe>
          </div>
              )}
         </div>
        </div>
        ))}
      </div>
      </div>
  );
}

export default Projects;


