import { useGlobalContext } from '../context';

const Meals = () => {
  const { meals } = useGlobalContext();

  return (
    <section className="section-center">
      {meals.map((meal) => {
        const { idMeal: id, strMeal: title, strMealThumb: image } = meal;
        return (
          <article key={id} className="single-meal">
            <img src={image} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">Click me</button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
