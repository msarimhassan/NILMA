'use client';

import { Table } from '@/components';

const Dashboard = () => {
  return (
    <div className='mt-5 md:px-20'>
      <Table
        title={'Recent Activity'}
        columns={['brand', 'campaign', 'action']}
        message={'Your recent activity, messages, and notifications will display here.'}
      />
    </div>
  );
};
export default Dashboard;
