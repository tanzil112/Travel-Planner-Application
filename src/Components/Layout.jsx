import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <div id='scrolling'>
      <marquee behavior="scroll" direction="left" scrollamount="15"><i>"Welcome to Traveller - Your One-Stop Destination for All Your Travel Itineraries!"</i></marquee>
      </div>
      < Navbar/>
      
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default Layout;
