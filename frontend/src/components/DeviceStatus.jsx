import React from 'react';
import { FaCheckCircle, FaExclamationCircle, FaBatteryFull, FaBolt } from 'react-icons/fa';

const DeviceStatus = ({ status }) => {
  // Mapping device status to icons
  const statusIcon = () => {
    if (!status) {
      return (
        <>
          <FaCheckCircle className="text-green-500 text-5xl mr-2" />
          <FaExclamationCircle className="text-yellow-500 text-5xl mr-2" />
          <FaBolt className="text-blue-500 text-5xl" />
        </>
      );
    } else {
      switch (status) {
        case 'active':
          return <FaCheckCircle className="text-green-500 text-5xl" />;
        case 'idle':
          return <FaExclamationCircle className="text-yellow-500 text-5xl" />;
        case 'charging':
          return <FaBolt className="text-blue-500 text-5xl" />;
        default:
          return null;
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-80 h-64 m-6 mt-4 rounded-lg p-6 shadow-md flex items-center justify-center">
      <div className="mr-6 flex items-center">{statusIcon()}</div>
      <span className="text-black text-2xl font-bold">{status || 'Status'}</span>
    </div>
  );
};

export default DeviceStatus;