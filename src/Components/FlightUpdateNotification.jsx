import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const FlightUpdateNotification = () => {
  const { preferences } = useContext(NotificationContext);

  const sendNotification = (update) => {
    if (preferences.flightUpdates) {
      switch (preferences.notificationMethod) {
        case 'email':
          console.log(`Sending email notification: ${update}`);
          break;
        case 'push':
          console.log(`Sending push notification: ${update}`);
          break;
        case 'in-app':
          console.log(`Displaying in-app notification: ${update}`);
          break;
        default:
          console.log('Notification method not set');
      }
    }
  };

  const handleFlightUpdate = () => {
    const update = 'Flight XYZ has been delayed by 30 minutes.';
    sendNotification(update);
  };

  return (
    <div>
      <h2>Flight Updates</h2>
      <button onClick={handleFlightUpdate}>Update Flight Status</button>
    </div>
  );
};

export default FlightUpdateNotification;
