import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className='bg-black p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Left Side - Logo and Links */}
        <div className='flex items-center'>
          <div className='text-white text-xl font-bold mr-6'>Logo</div>
          <div className='hidden md:flex space-x-4'>
            <a href='#' className='text-gray-300 hover:text-white'>
              Dashboard
            </a>

            <a href='#' className='text-gray-300 hover:text-white'>
              Oppurtunities
            </a>
            <a href='#' className='text-gray-300 hover:text-white'>
              Contracts
            </a>
          </div>
        </div>

        {/* Right Side - Dropdown */}
        <div className='relative'>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className='text-white focus:outline-none'
          >
            John Doe
            <FontAwesomeIcon icon={faCaretDown} className='ml-1 w-2' />
          </button>
          {dropdownOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2'>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b'>
                Profile
              </a>
              <a href='#' className='block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b'>
                Settings
              </a>
              <Link href='/' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
