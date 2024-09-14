import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
            {/* Further */}
            </a>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
              href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B%2FR%2F9todCSIKBbKQ6%2FZunxA%3D%3D' 
              target='_blank' 
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <FaLinkedin  className='text-yellow-300'/>  
              
            </a>

            <a 
              href='https://github.com/Digantagowala' 
              target='_blank' 
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
            <FaGithub className='text-yellow-300'/>  
            </a>
        </div>
    </nav>
  )
}

export default Navbar