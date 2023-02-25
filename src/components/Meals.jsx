import { useGlobalContext } from '../context';

const Meals = () => {
  // const context = useGlobalContext();
  const { meals } = useGlobalContext();
  console.log(meals);
  return (
    <section>
      {meals.map((meal) => {
        // console.log(meal);
        return <h3>{meal.strMeal}</h3>;
      })}
    </section>
  );
};

export default Meals;
