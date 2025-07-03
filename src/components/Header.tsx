
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="text-red-600 font-bold">
                  <svg width="32" height="32" viewBox="0 0 32 32" className="text-red-600">
                    <circle cx="16" cy="8" r="6" fill="currentColor" />
                    <circle cx="8" cy="20" r="6" fill="green" />
                    <circle cx="24" cy="20" r="6" fill="blue" />
                  </svg>
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold">สิ่งประดิษฐ์และนวัตกรรมคณะเทคโนโลยีอุตสาหกรรม</h1>
                <p className="text-sm opacity-90">Inventions and Innovations Faculty of Industrial Technology</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="ml-2">Toggle Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
