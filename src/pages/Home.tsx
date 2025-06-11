import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Calendar, MessageSquare, X } from 'lucide-react'; // Added X for the close button

// Import local hero image
import heroImage from '../assets/background.png'; // Update with the correct path
import Header from './Header';

export const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const handleChatbotClick = () => {
    setIsChatOpen(true); // Open the chatbot modal or interface
  };

  const handleCloseChatbot = () => {
    setIsChatOpen(false); // Close the chatbot modal
  };

  const handleSendMessage = async () => {
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBotResponse(data.bot_reply); // Set the bot's response
      setUserInput(''); // Clear input after sending
    } catch (error) {
      console.error('Error sending message:', error);
      setBotResponse('Sorry, there was an error with the chatbot.'); // Display error message
    }
  };

  return (
    <div>
    
      {/* <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage} 
            alt="Mother and baby"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl  text-[#180a19] mb-6">
          You are not alone , we got you,Mommy !
          </h1>
          <p className="text-xl  text-[#180a19] mb-8">
            Comprehensive postpartum care tailored to your unique needs
          </p>
          <Link
            to="/register"
            className="inline-block bg-[#8fc4f5] text-white px-8 py-4 rounded-lg text-lg  hover:bg-[#2e10425] transition-colors"
          >
            Start Your Journey
          </Link>
        </div>
      </section> */}

      <Header/>

<div  className=" p-6 px-16 bg-[#f4f1ed] " >

      <section className="container mx-auto p-6 ">
        <h2 className="text-4xl font-bold text-[#7ba9d3] text-center mb-10">
         خدماتنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       
          <ServiceCard
            number="01"
            title="خدمة الحاضن"
            description="إكتشف حاضنات موثوقات يوفّرو رعاية تتماشى مع احتياجات عايلتك، لدعم حضانة بلا توتّر"
          />
          {/* Mental Health Support */}
          <ServiceCard
            number="02"
            title="دعم الصحّة النفسيّة"
            description="تمكّن من الوصول لدعم محترف للصحة النفسية عبر استشارات افتراضية سرية ومليانة رحمة."
          />
          {/* Nutrition Chart */}
          <ServiceCard
            number="03"
            title="جدول التغذية"
            description="Receive personalized nutrition charts crafted by expert dietitians to match your health goals."
          />
          {/* Personalized Journey Tracker */}
          <ServiceCard
            number="04"
            title="Personalized Journey Tracker"
            description="Monitor your progress with a customized journey tracker designed to keep you motivated and informed."
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#e9e7e3] py-16">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-4xl  text-pink-800 text-center mb-12">
            Why Choose MotherCare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield />}
              title="Verified Professionals"
              description="All our nannies undergo thorough background checks and training"
            />
            <FeatureCard
              icon={<Calendar />}
              title="Flexible Plans"
              description="Choose from various subscription plans that fit your needs"
            />
            <FeatureCard
              icon={<Heart />}
              title="Holistic Care"
              description="Comprehensive support for both physical and mental well-being"
            />
          </div>
        </div>
      </section>

      {/* Chatbot Icon */}
      <div
        className="fixed bottom-8 right-8 bg-[#e9e7e3] p-4 rounded-full cursor-pointer hover:bg-pink-700 transition-colors shadow-lg"
        onClick={handleChatbotClick}
      >
        <MessageSquare size={40} className="text-white" />
      </div>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-8 bg-white p-6 rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">MotherCare Assistant</h3>
            <button
              onClick={handleCloseChatbot}
              className="text-pink-600 hover:text-pink-700"
            >
              <X size={20} />
            </button>
          </div>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me something..."
            className="w-full h-20 p-2 border rounded mt-4"
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="w-full mt-4 bg-[#e9e7e3] text-white py-2 rounded"
          >
            Send
          </button>
          {botResponse && (
            <div className="mt-4 text-pink-700">
              <strong>Bot:</strong> {botResponse}
            </div>
          )}
        </div>
      )}
</div>

    </div>
  );
};

const ServiceCard = ({ number, title, description }) => (
  <div className="bg-[#e8f1eb] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex items-center justify-center w-12 h-12 bg[#c0d2c7] text-[#2e1042] font-bold rounded-full">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-[#2e1042] ">{title}</h3>
    </div>
    <p className="text-[#2e1042] ">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg">
    <div className="text-[#c0d2c7] w-12 h-12 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-pink-800 mb-2">{title}</h3>
    <p className="text-[#2e1042] ">{description}</p>
  </div>
);
