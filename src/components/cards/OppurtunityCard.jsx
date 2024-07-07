import React from 'react';

const OppurtunityCard = ({ card }) => {
  return (
    <div className='bg-white shadow-md rounded-sm overflow-hidden'>
      <img src={card.image} alt={card.title} className='w-full h-48 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold'>{card.title}</h2>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    { image: 'https://via.placeholder.com/150', title: 'Card 1' },
    { image: 'https://via.placeholder.com/150', title: 'Card 2' },
    { image: 'https://via.placeholder.com/150', title: 'Card 3' },
    { image: 'https://via.placeholder.com/150', title: 'Card 4' },
    { image: 'https://via.placeholder.com/150', title: 'Card 5' },
    { image: 'https://via.placeholder.com/150', title: 'Card 6' },
    { image: 'https://via.placeholder.com/150', title: 'Card 7' },
    { image: 'https://via.placeholder.com/150', title: 'Card 8' },
  ];

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {cards.map((card, index) => (
          <OppurtunityCard card={card} key={index} />
        ))}
      </div>

      <div className='flex justify-between items-center mt-4'>
        <div className='text-sm font-medium text-gray-500'>
          Results per page:
          <select className='ml-2 border border-gray-300 rounded-md '>
            {[5, 10, 20, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='flex items-center space-x-2 text-xs font-medium text-gray-500'>
          <button className='px-2 py-1 border rounded-md border-gray-300 disabled:opacity-50'>
            &lt;
          </button>
          <span className='text-sm'>1</span>
          <button className='px-2 py-1 border rounded-md border-gray-300 disabled:opacity-50'>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
