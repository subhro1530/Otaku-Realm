// contexts/PageContext.js
import React, { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPageState, setCurrentPageState] = useState(null);

  return (
    <PageContext.Provider value={{ currentPageState, setCurrentPageState }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  return useContext(PageContext);
};
