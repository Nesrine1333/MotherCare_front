import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const healthData = [
  { day: 'Mon', heartRate: 78, sleep: 6.5, stress: 4 },
  { day: 'Tue', heartRate: 75, sleep: 7.2, stress: 3 },
  { day: 'Wed', heartRate: 85, sleep: 5.1, stress: 6 },
  { day: 'Thu', heartRate: 80, sleep: 6.8, stress: 5 },
  { day: 'Fri', heartRate: 72, sleep: 8.0, stress: 2 },
];

const ChartCard = ({
  title,
  dataKey,
  strokeColor,
  unit,
}: {
  title: string;
  dataKey: string;
  strokeColor: string;
  unit: string;
}) => (
  <div className="shadow-lg rounded-xl  w-full">
    <h4 className="text-xl font-semibold text-[#2e1042] mb-4">{title}</h4>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={healthData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis unit={unit} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={dataKey}
          stroke={strokeColor}
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const HealthDashboard: React.FC = () => {
  return (
    <section className="px-6 w-full">
      <h2 className="text-3xl font-bold text-[#2e1042] mb-8">👩‍⚕️ Postpartum Health Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <ChartCard
          title="Heart Rate (BPM)"
          dataKey="heartRate"
          strokeColor="#c14f44"
          unit=" bpm"
        />
        <ChartCard
          title="Sleep Duration"
          dataKey="sleep"
          strokeColor="#8fc4f5"
          unit="h"
        />
        <ChartCard
          title="Stress Level"
          dataKey="stress"
          strokeColor="#452923"
          unit=""
        />
      </div>
    </section>
  );
};

export default HealthDashboard;
