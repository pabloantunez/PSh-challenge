import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header({ name, challengeName }) {
  return (
    <AppBar 
      position="static" 
      className='!bg-gradient-to-r from-red-psh to-purple-psh'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">
          {name}
        </Typography>
        <Typography variant="h6">
          {challengeName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;