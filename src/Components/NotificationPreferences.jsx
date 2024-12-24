import React, { useContext, useState } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationPreferences = () => {
  const { preferences, updatePreferences } = useContext(NotificationContext);
  const [formData, setFormData] = useState(preferences);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    updatePreferences(formData);
    alert('Preferences saved!');
  };

  return (
    <div>
      <h2>Notification Preferences</h2>
      <div>
        <label>
          <input
            type="checkbox"
            name="flightUpdates"
            checked={formData.flightUpdates}
            onChange={handleChange}
          />
          Receive Flight Updates
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="weatherUpdates"
            checked={formData.weatherUpdates}
            onChange={handleChange}
          />
          Receive Weather Updates
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="groupActivityUpdates"
            checked={formData.groupActivityUpdates}
            onChange={handleChange}
          />
          Receive Group Activity Updates
        </label>
      </div>
      <div>
        <label>Notification Method:</label>
        <select
          name="notificationMethod"
          value={formData.notificationMethod}
          onChange={handleChange}
        >
          <option value="email">Email</option>
          <option value="push">Push Notification</option>
          <option value="in-app">In-App Notification</option>
        </select>
      </div>
      <button onClick={handleSave}>Save Preferences</button>
    </div>
  );
};

export default NotificationPreferences;
