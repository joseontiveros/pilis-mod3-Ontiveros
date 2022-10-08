import { createContext, useState } from "react";

export const TempContext = createContext({
  Temp: [],
  setTemp: () => {}
})


export const TempContextProvider = ({ children }) => {
  const [Temp, setTemp] = useState([]);
  const value = { Temp, setTemp };

  return <TempContext.Provider value={value}>{children}</TempContext.Provider>;
}