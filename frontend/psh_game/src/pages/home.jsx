import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BasicButtons from '../components/Button';

const Home = () => {
  const location = useLocation();
  const hideButtons = ['/stats'];

  return (
    <div className='container mx-auto h-full items-center justify-center flex flex-col'>
      <h1 className='text-red-psh font-bold text-3xl'>Welcome to the PSh Statistics Game</h1>
      <br></br>
      <br></br>
      {!hideButtons.includes(location.pathname) && (
        <Link to="/stats">
          <BasicButtons 
            label='Show Statistics'
            variant='contained'
            size='large'
          />
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default Home;