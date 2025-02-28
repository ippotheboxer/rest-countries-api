import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className='flex flex-row items-center'>
      <div
      className="mt-36 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span>
    </div>
    <p className='ml-4 pt-36'>Loading...</p>
  </div>
  );
}

export default Loading;