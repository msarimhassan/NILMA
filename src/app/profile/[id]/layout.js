'use client';

import { Navbar, Footer } from '@/components';

const ProfileLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='flex items-center p-4'>
        <div className='flex-1'>
          <img src='/path-to-your-logo.png' alt='Logo' className='h-10 w-10' />
        </div>
      </header>
      <main className='flex flex-1 items-center justify-center'>{children}</main>
    </div>
  );
};
export default ProfileLayout;
