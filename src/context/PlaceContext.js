import { createContext, useState } from "react";

export const PlaceContext = createContext({
  Place: [],
  setPlace: () => {}
})


export const PlaceContextProvider = ({ children }) => {
  const [Place, setPlace] = useState([]);
  const value = { Place, setPlace };

  return <PlaceContext.Provider value={value}>{children}</PlaceContext.Provider>;
}