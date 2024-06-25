import React from 'react';

function Footer() {
  return (
    <footer className='bg-black p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Left Side - Company Name and Registered Trademark */}
        <div className='text-white'>&copy; 2024 Company Name&#174;</div>

        {/* Right Side - Contact Email */}
        <div className='text-white'>contact@company.com</div>
      </div>
    </footer>
  );
}

export default Footer;
