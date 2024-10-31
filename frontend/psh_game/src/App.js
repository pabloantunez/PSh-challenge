import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App min-h-[100svh] flex flex-col justify-between">
      <Header name="Pablo Germán Antúnez" challengeName="PSh-Challenge" />
      <main className="container mx-auto h-full flex-grow flex items-center">
        <Outlet />
      </main>
      <Footer linkedinUrl="https://www.linkedin.com/in/pabloantunez/" title="University Technician in Web Development"/>
    </div>
  );
}

export default App;