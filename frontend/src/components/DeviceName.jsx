import React from 'react';
import { FaMobileAlt } from 'react-icons/fa';

const DeviceName = ({ name }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-80 h-64 rounded-lg overflow-hidden shadow-lg mx-auto my-4">
      <div className="flex justify-center items-center h-full px-6 py-4">
        <div className="text-black text-2xl font-bold">
          <FaMobileAlt className="mr-2" style={{ fontSize: '3em', color: '#212121' }} />
          {name || 'Device Name'}
        </div>
      </div>
    </div>
  );
};

export default DeviceName;