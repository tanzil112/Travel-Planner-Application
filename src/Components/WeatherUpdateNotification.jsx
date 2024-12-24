import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const WeatherUpdateNotification = () => {
  const { preferences } = useContext(NotificationContext);

  const sendWeatherNotification = (weatherUpdate) => {
    if (preferences.weatherUpdates) {
      switch (preferences.notificationMethod) {
        case 'email':
          console.log(`Sending email notification: ${weatherUpdate}`);
          break;
        case 'push':
          console.log(`Sending push notification: ${weatherUpdate}`);
          break;
        case 'in-app':
          console.log(`Displaying in-app notification: ${weatherUpdate}`);
          break;
        default:
          console.log('Notification method not set');
      }
    }
  };

  const handleWeatherUpdate = () => {
    const weatherUpdate = 'Weather forecast for your destination: Sunny, 75°F.';
    sendWeatherNotification(weatherUpdate);
  };

  return (
    <div>
      <h2>Weather Updates</h2>
      <button onClick={handleWeatherUpdate}>Update Weather</button>
    </div>
  );
};

export default WeatherUpdateNotification;
