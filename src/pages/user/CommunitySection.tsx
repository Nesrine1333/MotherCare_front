import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const communityData = [
  { day: 'Mon', messages: 5, likes: 2, questions: 1 },
  { day: 'Tue', messages: 3, likes: 4, questions: 2 },
  { day: 'Wed', messages: 7, likes: 1, questions: 3 },
  { day: 'Thu', messages: 2, likes: 5, questions: 1 },
  { day: 'Fri', messages: 6, likes: 3, questions: 2 },
];

const CommunitySection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md  ">
      <h3 className="text-2xl text-[#2e1042] font-bold mb-4">🤝 Community Engagement</h3>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={communityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="messages" fill="#8fc4f5" name="Messages Sent" />
          <Bar dataKey="likes" fill="#c14f44" name="Likes Received" />
          <Bar dataKey="questions" fill="#452923" name="Questions Asked" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default CommunitySection;
