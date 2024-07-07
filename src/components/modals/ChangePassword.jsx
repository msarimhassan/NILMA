import { useState } from 'react';

function Modal({ isOpen, setIsOpen }) {
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      {/* Background overlay */}
      <div className='fixed inset-0 bg-black opacity-50'></div>

      {/* Modal */}
      <div
        className={`fixed top-0 left-0 right-0 bg-white p-4 transform transition-transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-lg font-semibold'>Modal Title</h2>
          <button
            onClick={closeModal}
            className='text-gray-500 hover:text-gray-700 focus:outline-none'
          >
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='mt-4'>
          <p>Modal content goes here...</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
