import React from 'react'
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            #Van Life
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/vans" color="inherit">Vans</Button>
          <Button component={Link} to="/host" color="inherit">Host</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
