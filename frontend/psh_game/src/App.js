import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header name="Pablo Germán Antúnez" challengeName="PSh-Challenge" />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
      <Footer linkedinUrl='https://www.linkedin.com/in/pabloantunez/' title='University Technician in Web Development'/>
    </div>
  );
}

export default App;