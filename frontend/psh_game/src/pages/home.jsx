import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BasicButtons from '../components/Button';
import DataGridDemo from '../components/Grid';

const Home = () => {
  const location = useLocation();
  const hideButtons = ['/stats'];

  const rows = [
    { id: 1, name: 'testing 1', value: 100 },
    { id: 2, name: 'testing 2', value: 200 },
  ];


  const columns = [
    { field: 'name', headerName: 'AAA', minWidth: 150 },
    { field: 'value', headerName: 'BBB', minWidth: 100 },
  ];

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
      <DataGridDemo 
        rows={rows}
        columns={columns}
        maxElements={10}
      />
      <Outlet />
    </div>
  );
};

export default Home;