import React, { createContext, useState } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  
  const [hasAppRendered, setHasAppRendered] = useState(false);

  // Define the timer duration based on the boolean value
  const timerDuration = hasAppRendered ? 1000 : 5000;

  const setAppRendered = () => {
    setHasAppRendered(true);
  };

  return (
    <TimerContext.Provider
      value={{
        hasAppRendered,
        setAppRendered,
        timerDuration,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };
