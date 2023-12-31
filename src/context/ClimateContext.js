// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [climateTemperature, setClimateTemperature] = useState(50);
  const [climateHumidity, setClimateHumidity] = useState(40);

  return (
    <ClimateContext.Provider
      value={{
        climateTemperature,
        setClimateTemperature,
        climateHumidity,
        setClimateHumidity
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
