import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BasicButtons from '../components/Button';

const Home = () => {
  const location = useLocation();
  const hideButtons = ['/stats'];

  return (
    <div>
      <h1>Welcome to the PSh Statistics Game</h1>
      {!hideButtons.includes(location.pathname) && (
        <Link to="/stats">
          <BasicButtons 
            label='Show Statistics'
            color='secondary'
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