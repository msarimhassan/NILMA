import React, { useState } from 'react';
import { Text4Xl } from '../text';

const TableComponent = ({ title, columns, message, showFilter = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState();

  // const totalPages = Math.ceil(data.length / rowsPerPage);
  const totalPages = 10;

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1); // Reset to first page
  };

  // const paginatedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const data = [
    // { col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' },
    // { col1: 'Data A', col2: 'Data B', col3: 'Data C' },
  ];

  return (
    <div className='overflow-x-auto'>
      <div className='flex justify-between items-center'>
        <Text4Xl text={title} classes={'font-bold'} />
        {showFilter ? (
          <div className='flex space-x-4'>
            <label className='flex items-center'>
              <input type='radio' value='All' className='form-radio' />
              <span className='ml-2'>All</span>
            </label>
            <label className='flex items-center'>
              <input type='radio' value='Closed' className='form-radio' />
              <span className='ml-2'>Closed</span>
            </label>
            <label className='flex items-center'>
              <input type='radio' value='Open' className='form-radio' />
              <span className='ml-2'>Open</span>
            </label>
          </div>
        ) : null}
      </div>

      <table className='min-w-full divide-y divide-gray-200 mt-5'>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                scope='col'
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b'
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200'>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                  {item.col1}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.col2}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{item.col3}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='3' className='px-6 py-4  text-sm text-gray-500'>
                {message}
              </td>
            </tr>
          )}
        </tbody>
        <tfoot className='border-t'>
          <tr>
            <td
              colSpan='3'
              className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-t'
            ></td>
          </tr>
        </tfoot>
      </table>

      <div className='flex justify-between items-center mt-4'>
        <div className='text-sm font-medium text-gray-500'>
          Results per page:
          <select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className='ml-2 border border-gray-300 rounded-md '
          >
            {[5, 10, 20, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='flex items-center space-x-2 text-xs font-medium text-gray-500'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='px-2 py-1 border rounded-md border-gray-300 disabled:opacity-50'
          >
            &lt;
          </button>
          <span className='text-sm'>{currentPage}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='px-2 py-1 border rounded-md border-gray-300 disabled:opacity-50'
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
