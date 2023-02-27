import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=aaa';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      data.meals ? setMeals(data.meals) : setMeals([]);
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
