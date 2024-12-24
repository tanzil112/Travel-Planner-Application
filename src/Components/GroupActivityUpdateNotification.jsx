import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const GroupActivityUpdateNotification = () => {
  const { preferences } = useContext(NotificationContext);

  const sendGroupActivityNotification = (activityUpdate) => {
    if (preferences.groupActivityUpdates) {
      switch (preferences.notificationMethod) {
        case 'email':
          console.log(`Sending email notification: ${activityUpdate}`);
          break;
        case 'push':
          console.log(`Sending push notification: ${activityUpdate}`);
          break;
        case 'in-app':
          console.log(`Displaying in-app notification: ${activityUpdate}`);
          break;
        default:
          console.log('Notification method not set');
      }
    }
  };

  const handleActivityUpdate = () => {
    const activityUpdate = 'New group activity has been added to your trip!';
    sendGroupActivityNotification(activityUpdate);
  };

  return (
    <div>
      <h2>Group Activity Updates</h2>
      <button onClick={handleActivityUpdate}>Update Activity</button>
    </div>
  );
};

export default GroupActivityUpdateNotification;
