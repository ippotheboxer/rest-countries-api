import React from 'react';

const Wrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='px-10 md:px-20'>
        {children}
    </div>
  );
}

export default Wrapper;