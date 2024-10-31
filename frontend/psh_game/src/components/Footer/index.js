import React from 'react';

const Footer = ({ linkedinUrl, title }) => {
  return (
    <footer style={footerStyle}>
      <p>Profile: {linkedinUrl}</p>
      <p>{title}</p>
    </footer>
  );
};

const footerStyle = {
  padding: '20px',
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;