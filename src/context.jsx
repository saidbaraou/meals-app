import { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://randomuser.me/api');
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: 'John', role: 'student' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
