import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div style={{ bottom: '2rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <hr className='my-3' style={{ borderColor: 'white', width: '70%' }} />
    </div>
  );
};

export default Footer;
