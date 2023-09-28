import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Home from './app/Home';
import Services from './app/Services';
import Dashboard from './app/Dashboard';

function App() {
  
  return (
 <>
 
 <Navbar />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="services" element={<Services />}></Route>
    <Route path="dashboard" element={<Dashboard />}></Route>

  </Routes>
 </>
  );
}

export default App;
