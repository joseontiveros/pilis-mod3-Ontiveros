import { createContext, useState } from "react";

export const CardLocationContext = createContext({
  CardLocation: [],
  setCardLocation: () => {},
});

export const CardLocationContextProvider = ({ children }) => {
  const [CardLocation, setCardLocation] = useState([]);
  const value = { CardLocation, setCardLocation };
  return (
    <CardLocationContext.Provider value={value}>
      {children}
    </CardLocationContext.Provider>
  );
};
