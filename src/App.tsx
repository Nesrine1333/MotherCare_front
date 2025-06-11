import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Services } from './pages/Services';
import { Community } from './pages/Community';
import { Education } from './pages/Education';
import SignUpPage from './pages/Login';
import Dashboard from './pages/user/dashboard';
import EPDSForm from './pages/user/Form';

function App() {
  return (
    <Router>
      <LoadingScreen />
      <div className="min-h-screen bg-pink-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signup" element={<SignUpPage />} />
        <Route path="/user" element={<Dashboard />} />
        <Route path="/form" element={<EPDSForm />} />

            <Route path="/services" element={<Services />} />
            <Route path="/community" element={<Community />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;