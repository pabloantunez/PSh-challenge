import React from 'react';
import Header from './components/Header';
//import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header name="Pablo Germán Antúnez" challengeName="PSh-Challenge" />
      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default App;