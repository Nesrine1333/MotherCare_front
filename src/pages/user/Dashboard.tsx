import React from 'react';
import HealthSection from './HealthSection';
import HealthDashboard from './HealthSection';

const Dashboard: React.FC = () => {
  return (
    <div className="flex py-20 px-10 w-full">


      {/* Main Content */}
      <main className="   w-full rounded-lg shadow-md">
        {/* Profile Section */}
        <section className=" p-6 rounded-lg shadow-md border  mb-8">
          <h3 className="text-2xl text-[#2e1042] font-bold mb-4">Profile</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#2e1042]">
            <div>
              <strong>Name:</strong> Emna Chermeti
            </div>
            <div>
              <strong>Age:</strong> 30
            </div>
            <div>
              <strong>Baby's Age:</strong> 2 weeks
            </div>
            <div>
              <strong>Recent Checkup:</strong> June 1, 2025
            </div>
          </div>
        </section>

        < HealthDashboard
 />
      </main>
    </div>
  );
};

export default Dashboard;
