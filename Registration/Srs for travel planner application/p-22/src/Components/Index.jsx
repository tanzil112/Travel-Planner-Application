// File: Index.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Destination from './Destination';
import Packages from './Packages';
import Contact from './Contact';
import Layout from './Layout';
import Navbar from './Navbar';
import Flights from './Flights';
import TermsAndC from './T&C';
function Index() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
       
        
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/terms' element={<TermsAndC/>}></Route>
          <Route path="/dashboard2" element={<ProtectedRoute><Dashboard2 /></ProtectedRoute>}/>
          <Route path='/home' element={<Dashboard2></Dashboard2>}></Route>
          <Route element={<Layout />}>
          <Route path='/destination' element={<Destination></Destination>}></Route>
          <Route path='/package' element={<Packages></Packages>}></Route>
          <Route path='/flights' element={<Flights></Flights>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
