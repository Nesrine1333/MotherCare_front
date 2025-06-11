import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
	const navigate = useNavigate();
	

   const setIsMenuOpen=()=>{
navigate('/user')
   }
  return (
    <div className="w-full flex items-center justify-center bg-[#fefefe] px-16">
      <div className="w-full p-8 bg-white border rounded-lg shadow-md shadow-[#583733]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#2e1042]">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-[#2e1042]">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[#452923] rounded focus:outline-none focus:ring-2 focus:ring-[#8fc4f5]"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-[#2e1042]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[#452923] rounded focus:outline-none focus:ring-2 focus:ring-[#8fc4f5]"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-[#2e1042]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-[#452923] rounded focus:outline-none focus:ring-2 focus:ring-[#8fc4f5]"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#8fc4f5] text-white py-2 rounded-lg hover:bg-[#2e1042] transition-colors"
               onClick={() => setIsMenuOpen(true)}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[#2e1042]">
          Already have an account? <a href="/login" className="underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
