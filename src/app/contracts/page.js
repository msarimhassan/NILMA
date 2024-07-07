'use client';

import { Table } from '@/components';

const Contracts = () => {
  return (
    <div className='mt-5 md:px-20'>
      <Table
        title='Contracts'
        columns={['brand', 'campaign', 'action', 'payout', 'status', 'pdf']}
        message={'No contracts found'}
      />
    </div>
  );
};

export default Contracts;
