import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCheckSquare,
  faShare,
  faHandshakeSimple,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components';

const AthleteCard = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg max-w-md w-full'>
      <div className='relative h-80 mb-4 overflow-hidden rounded-t-lg'>
        <Image src='/images/athlete.jpg' alt='Athlete' layout='fill' objectFit='cover' />
        <div className='absolute top-2 right-2 p-1 bg-slate-100 rounded-lg flex items-center'>
          <FontAwesomeIcon icon={faCheckCircle} className='w-4 text-green-500' />
          <p className='text-xs ml-1'>Identity Verified</p>
        </div>
      </div>

      <div className='px-5'>
        <div>
          <h2 className='text-lg font-bold'>John Doe</h2>
          <p className=' text-slate-500 text-sm mt-2'>Track and field</p>
          <p className=' text-sm italic mt-2'>Running</p>
          <p className='text-gray-600 uppercase text-sm mt-2'>Available for</p>
        </div>

        <div className='grid grid-cols-2 gap-4 mt-2'>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCheckSquare} className='w-4 text-green-500' />
            <p className='text-sm ml-2'>Running</p>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCheckSquare} className='w-4 text-green-500' />
            <p className='text-sm ml-2'>Swimming</p>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCheckSquare} className='w-4 text-green-500' />
            <p className='text-sm ml-2'>Running</p>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faCheckSquare} className='w-4 text-green-500' />
            <p className='text-sm ml-2'>Swimming</p>
          </div>
        </div>

        <div className='flex justify-center my-5'>
          <Button text={'Share'} icon={faShare} isRounded classes='mr-1' />
          <Button
            text={'Make a Deal'}
            icon={faHandshakeSimple}
            isRounded
            classes='ml-1'
            width='w-36'
          />
        </div>
      </div>
    </div>
  );
};

export default AthleteCard;
