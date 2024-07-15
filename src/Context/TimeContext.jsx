import React, { createContext, useState } from "react";

//I created this file to allow users to have 2 render times , one to see the the background animation when the app renders the first time and another to when someone comeback from the details page .

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
