
import React from 'react';
import { Home, FileText, Search } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'หน้าหลัก', icon: Home, active: true },
    { id: 2, label: 'คลังสิ่งประดิษฐ์', icon: FileText, active: false },
    { id: 3, label: 'แบบสำรวจ', icon: Search, active: false }
  ];

  return (
    <aside className="w-64 bg-gray-200 min-h-screen shadow-lg">
      <div className="p-4 border-b">
        <h2 className="font-bold text-gray-800">Menu</h2>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-blue-100 text-blue-800 border-l-4 border-blue-500'
                      : 'text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="p-4 border-t mt-auto">
        <p className="text-sm text-gray-600">จำนวนผู้เข้าชม : 1775</p>
      </div>
    </aside>
  );
};

export default Sidebar;
