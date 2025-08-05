import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 bg-opacity-90 flex justify-center items-center">
      <div className="relative w-8 h-8">
        <div className="absolute w-full h-full border-4 border-t-blue-500 border-r-red-500 border-b-yellow-500 border-l-green-500 rounded-full animate-spin" style={{
          borderStyle: 'solid',
          borderWidth: '3px',
          borderRadius: '50%',
          clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%, 0 40%, 100% 40%, 100% 70%, 0 70%, 0 80%, 100% 80%, 100% 100%, 0 100%)'
        }}></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
