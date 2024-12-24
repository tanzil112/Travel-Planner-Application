import {useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import { NotificationProvider } from './context/NotificationContext';
import NotificationPreferences from './Components/NotificationPreferences';
import FlightUpdateNotification from './Components/FlightUpdateNotification';
import WeatherUpdateNotification from './Components/WeatherUpdateNotification';
import GroupActivityUpdateNotification from './Components/GroupActivityUpdateNotification';


function App  () {
  const [count, setCount] = useState(0)
return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Traveller</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    <NotificationProvider>
      <div>
        <h1>Collaborative Trip & Notification Preferences</h1>
        <NotificationPreferences />
        <FlightUpdateNotification />
        <WeatherUpdateNotification />
        <GroupActivityUpdateNotification />
      </div>
    </NotificationProvider>
  
    </>
  )
}

export default App
