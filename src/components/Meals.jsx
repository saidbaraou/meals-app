import { useGlobalContext } from '../context';

const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section>
      {meals.map((meal) => {
        return <h3>{meal.strMeal}</h3>;
      })}
    </section>
  );
};

export default Meals;
