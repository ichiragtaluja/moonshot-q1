import React, { useContext, useState } from "react";
import { createContext } from "react";
import { data } from "../data/data";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [continents, setContinents] = useState(data?.continents);
  return (
    <DataContext.Provider value={{ continents }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
