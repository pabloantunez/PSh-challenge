import React from 'react';

const Footer = ({ linkedinUrl, title }) => {
  return (
    <footer className='p-5 text-center w-full bottom-0 bg-purple-psh bg-opacity-100 text-white'>
      <p>Profile: {linkedinUrl}</p>
      <p>{title}</p>
    </footer>
  );
};

export default Footer;