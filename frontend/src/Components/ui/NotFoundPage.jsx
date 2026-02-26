import React from 'react';
import { MdError } from "react-icons/md";
const NotFoundPage = () => {
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="text-center bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-500 mb-4">No Results Found</h1>
        <p className="text-lg text-gray-400 mb-6">
          We couldn't find any movies matching your search. Please try a different query.
        </p>

        {/* Icon */}
        <div className="mb-6 w-full flex justify-center">
          <MdError size={100} className='text-red-500' />
        </div>


      </div>
    </div>
  );
};

export default NotFoundPage;
