'use client';

import { Navbar } from '@/components';
import Footer from '@/components/footer/Footer';

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
