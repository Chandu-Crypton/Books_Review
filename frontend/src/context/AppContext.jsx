import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    <AppContext.Provider value={{ books, setBooks, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
