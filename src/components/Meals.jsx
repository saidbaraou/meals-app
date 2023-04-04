import { useGlobalContext } from '../context';
import { FiThumbsUp } from 'react-icons/fi';

const Meals = () => {
  const { meals, loading, selectMeal } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h3>Loading...</h3>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h3>No items found</h3>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal: id, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={id} className="single-meal">
            <img
              src={image}
              className="img"
              onClick={() => selectMeal(idMeal)}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <FiThumbsUp />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
