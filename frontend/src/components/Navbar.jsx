import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <h1 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">Robotic System Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;