import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import { Container } from '@mui/system';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='secondary'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            #Van Life
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Container>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
    </Container>
    </BrowserRouter>
  )
}
export default App;
