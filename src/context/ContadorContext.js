import { createContext, useState } from "react";

export const ContadorContext = createContext({
  contador: {},
  setContador: () => {}
})

export const ContadorContextProvider = ({ children }) => {
  const [contador, setContador] = useState(1);
  const value = { contador, setContador };

  return <ContadorContext.Provider value={value}>{children}</ContadorContext.Provider>;
}