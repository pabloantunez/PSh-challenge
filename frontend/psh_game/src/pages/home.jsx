import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const hideButtons = ['/stats'];

  return (
    <div>
      <h1>Welcome to the PSh Statistics Game</h1>
      {!hideButtons.includes(location.pathname) && (
        <Link to="/stats">
          <button>Show Stats</button>
        </Link>
      )}
      <Outlet />
    </div>
  );
};

export default Home;