import React from 'react';

type SidebarProps = {
  activeTab: 'health' | 'community';
  setActiveTab: (tab: 'health' | 'community') => void;
};

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-64 bg-[#2e1042] text-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <ul className="space-y-4">
        <li
          className={`cursor-pointer p-2 rounded-lg ${
            activeTab === 'health' ? 'bg-[#8fc4f5] text-black' : 'hover:bg-[#8fc4f5]'
          }`}
          onClick={() => setActiveTab('health')}
        >
          Health
        </li>
        <li
          className={`cursor-pointer p-2 rounded-lg ${
            activeTab === 'community' ? 'bg-[#8fc4f5] text-black' : 'hover:bg-[#8fc4f5]'
          }`}
          onClick={() => setActiveTab('community')}
        >
          Community
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
