import Image from 'next/image';

const Athletes = () => {
  return (
    <div className='mx-auto container '>
      <div className='flex'>
        {/* Left side filters */}
        <div className='w-1/4 p-4'>
          <h2 className='text-lg font-semibold mb-4'>Filter</h2>
          {/* Add your filter options here */}
          <div>
            <label className='block mb-2'>
              <input type='checkbox' className='mr-2' />
              Option 1
            </label>
            <label className='block mb-2'>
              <input type='checkbox' className='mr-2' />
              Option 2
            </label>
            <label className='block mb-2'>
              <input type='checkbox' className='mr-2' />
              Option 3
            </label>
          </div>
        </div>

        {/* right side card */}
        <div className='w-3/4 p-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array(12)
              .fill(0)
              .map(() => (
                <div className='border p-4 rounded'>
                  <div className='w-full object-contain border'>
                    <Image
                      width={100}
                      height={100}
                      alt='Athlete'
                      src='https://via.placeholder.com/600x600'
                      className='w-full h-auto'
                    />
                  </div>
                  <h3 className='text-lg font-semibold mb-2'></h3>
                  <p>John Doe</p>
                  <p className='text-xs text-blue-400'>Category</p>
                  <p className='text-xs text-gray-400'>Lahore, Pakistan</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athletes;
