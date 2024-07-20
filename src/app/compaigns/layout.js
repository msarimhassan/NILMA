'use client';

import { Navbar, Footer } from '@/components';
import { Toaster } from 'react-hot-toast';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Toaster position='bottom-center' />
      <Navbar />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  );
};
export default DashboardLayout;
