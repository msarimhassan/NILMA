'use client';

import { Navbar, Footer } from '@/components';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>{children}</div>
      <Footer />
    </div>
  );
};
export default DashboardLayout;
