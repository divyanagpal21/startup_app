import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import ExistingOwner from './pages/ExistingOwner';
import NewOwner from './pages/NewOwner';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Results from './pages/Results';
import Homie from './pages/Homie';
import Footer from './components/Footer';

const App = () => (
  <Box style = {{backgroundColor: '#191919', height: '100vh'}}>
    <Navbar /> 
    {/* <hr className='my-3' style={{ borderColor: 'white' }}/>  */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ExistingOwner" element={<ExistingOwner/>} />
      <Route path="/NewOwner" element={<NewOwner />} />
      <Route path="/Results" element={<Results />} />
    </Routes>
     <Footer />
  </Box>
);

export default App;
