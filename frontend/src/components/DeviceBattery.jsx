import React from 'react';
import { FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf, FaBatteryThreeQuarters, FaBatteryFull } from 'react-icons/fa';

const DeviceBattery = ({ batteryLevel }) => {
  // Mapping battery levels to icons
  const batteryIcon = () => {
    if (batteryLevel === 0) {
      return <FaBatteryEmpty style={{ fontSize: '3em', color: '#212121' }} />;
    } else if (batteryLevel <= 25) {
      return <FaBatteryQuarter style={{ fontSize: '3em', color: '#212121' }} />;
    } else if (batteryLevel <= 50) {
      return <FaBatteryHalf style={{ fontSize: '3em', color: '#212121' }} />;
    } else if (batteryLevel <= 75) {
      return <FaBatteryThreeQuarters style={{ fontSize: '3em', color: '#212121' }} />;
    } else {
      return <FaBatteryFull style={{ fontSize: '3em', color: '#212121' }} />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 w-80 h-64 rounded-lg overflow-hidden shadow-lg mx-auto my-4">
      <div className="flex justify-center items-center h-full px-6 py-4">
        <div className="text-white text-2xl">
          {batteryIcon()}
          <span className="ml-2 text-black font-bold">{batteryLevel}%</span>
        </div>
      </div>
    </div>
  );
};

export default DeviceBattery;