import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faUser,
  faShare,
  faEdit,
  faMessage,
  faSignOut,
  faKeyboard,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';

import { ChangePasswordModal } from '../modals';
import { useToast } from '@/hooks';

const Navbar = () => {
  const dropdownRef = useRef(null);
  const { showSucess } = useToast();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  const pathName = usePathname();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (route) => pathName === route;

  return (
    <>
      {openChangePasswordModal && <ChangePasswordModal />}
      <nav className='bg-black p-4' ref={dropdownRef}>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Left Side - Logo and Links */}
          <div className='flex items-center'>
            <div className='text-white text-xl font-bold mr-6'>Logo</div>
            <div className='hidden md:flex space-x-4'>
              <Link href='/dashboard'>
                <div
                  className={`px-2 py-1  ${
                    isActive('/dashboard') ? 'bg-white text-black  rounded' : 'text-gray-300'
                  }`}
                >
                  Dashboard
                </div>
              </Link>
              <Link href='/athletes'>
                <div
                  className={`px-2 py-1  ${
                    isActive('/athletes') ? 'bg-white text-black  rounded' : 'text-gray-300'
                  }`}
                >
                  Athletes
                </div>
              </Link>

              <Link href='/oppurtunities'>
                <div
                  className={`px-2 py-1 ${
                    isActive('/oppurtunities') ? 'bg-white text-black  rounded' : 'text-gray-300'
                  }`}
                >
                  Opportunities
                </div>
              </Link>

              <Link href='/contracts'>
                <div
                  className={` px-2 py-1  ${
                    isActive('/contracts') ? 'bg-white text-black  rounded' : 'text-gray-300'
                  }`}
                >
                  Contracts
                </div>
              </Link>
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
              <div className='absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2'>
                <Link href='/profile/1' target='_blank'>
                  <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'>
                    <FontAwesomeIcon className='w-3 mr-2' icon={faUser} /> View Profile
                  </div>
                </Link>
                <div
                  className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer'
                  onClick={() => showSucess('Profile link copied to clipboard')}
                >
                  <FontAwesomeIcon className='w-3 mr-2' icon={faShare} /> Share Profile
                </div>
                <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b cursor-pointer'>
                  <FontAwesomeIcon className='w-3 mr-2' icon={faEdit} /> Edit Profile
                </div>

                <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer '>
                  <FontAwesomeIcon className='w-3 mr-2' icon={faMessage} /> Update Email Address
                </div>
                <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer '>
                  <FontAwesomeIcon className='w-3 mr-2' icon={faKeyboard} /> Change Password
                </div>
                <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 border-b cursor-pointer'>
                  <FontAwesomeIcon className='w-3 mr-2' icon={faCreditCard} /> Edit Payment Settings
                </div>

                <Link href='/'>
                  <div className='block px-4 py-2 text-gray-800 hover:bg-gray-200 cursor-pointer '>
                    <FontAwesomeIcon className='w-3 mr-2' icon={faSignOut} /> Signout
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
