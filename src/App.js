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
// import Export from './pages/Export';
import Footer from './components/Footer';
import store from './redux/store';
import { Provider } from 'react-redux';


const App = () => (
  <Provider store = {store}>
  <Box style = {{backgroundColor: '#191919', height: '100vh'}}>
    <Navbar /> 
    {/* <hr className='my-3' style={{ borderColor: 'white' }}/>  */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ExistingOwner" element={<ExistingOwner/>} />
      <Route path="/NewOwner" element={<NewOwner />} />
      <Route path="/Results" element={<Results />} />
      {/* <Route path="/Export" element={<Export />} /> */}
    </Routes>
     <Footer />
  </Box>
  </Provider>
);

export default App;
