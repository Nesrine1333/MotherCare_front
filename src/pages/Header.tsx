import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from "react-spring";
import "./header.css";





const Header = () => {


  return (
    <header
    
      className=" flex items-center h-[100vh] xl:h-[100vh]"
      id="home"
    >
      <div className=" w-full m-11 text-center ">
  

        <div className=" my-6">
        <h1 className="text-5xl font-bold md:text-7xl  text-[#65392f] mb-6">
          !راك موش وحدك إحنا معاك 
          </h1>
          <p className="text-xl  text-[#000000] mb-8">
رعاية كاملة بعد الولادة مصمّمة حسب احتياجاتك الخاصّة            </p>
       
<Link
  to="/register"
  className="inline-block bg-[#8fc4f5] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#2e1042] transition-colors "
>
ابدأ رحلتك</Link>
        </div>
     

      </div>
    </header>
  );
};

export default Header;
