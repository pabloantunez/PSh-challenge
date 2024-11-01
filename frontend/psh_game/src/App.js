import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';
import { FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App min-h-[100svh] flex flex-col justify-between bg-gradient-to-r from-red-psh to-purple-psh">
      <Header name="Pablo Germán Antúnez" challengeName="PSh-Challenge" />
      <main className="container mx-auto h-full flex-grow flex items-center">
        <Outlet />
      </main>
      <Footer 
        linkedinUrl="https://www.linkedin.com/in/pabloantunez/" 
        title="University Technician in Web Development"
        icon={<FaLinkedin size={24} />} 
      />
    </div>
  );
}

export default App;