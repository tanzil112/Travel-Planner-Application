import React, { createContext, useState } from 'react';
export const NotificationContext = createContext();
export const NotificationProvider = ({ children }) => {
  const [preferences, setPreferences] = useState({
    flightUpdates: true,
    weatherUpdates: true,
    groupActivityUpdates: true,
    notificationMethod: 'email', 
  });
  const updatePreferences = (newPreferences) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      ...newPreferences,
    }));
  };
return (
    <NotificationContext.Provider value={{ preferences, updatePreferences }}>
      {children}
    </NotificationContext.Provider>
  );
};

