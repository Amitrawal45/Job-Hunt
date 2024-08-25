import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='border-t border-gray-200 py-8 bg-gray-800 text-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-xl font-bold'>Job <span className='text-[#6A38C2]'>Hunt</span></h2>
            <p className='text-sm'>&copy; 2024 Job Hunt. All rights reserved</p>
          </div>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href="https://facebook.com" aria-label="Facebook" className='hover:text-gray-400'>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className='hover:text-gray-400'>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className='hover:text-gray-400'>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className='hover:text-gray-400'>
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
