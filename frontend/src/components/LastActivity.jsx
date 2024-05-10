import React from 'react';
import { FaHistory } from 'react-icons/fa';

const LastActivity = ({ activityData }) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-full h-64 rounded-lg overflow-hidden shadow-lg mx-auto my-4 flex justify-center items-center">
      <div className="px-6 py-4">
        <div className="text-black text-2xl font-bold flex items-center">
          <FaHistory className="text-gray-600 text-5xl mr-4" />
          <span>Last Activity:</span>
        </div>
        <div className="text-2xl ml-4 font-bold">{activityData || 'No activity'}</div>
      </div>
    </div>
  );
};

export default LastActivity;