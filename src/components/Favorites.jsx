import { useGlobalContext } from '../context';

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext;
  return (
    <section className="favorites">
      <div className="favorites-content">
        {favorites.map((item) => {
          const { idMeal: id, strMealThumb: image } = item;

          return (
            <div key={id} className="favorite-item">
              <img src={image} className="favorites-img img" />
              <button
                className="remove-btn"
                onClick={() => removeFromFavorites(id)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Favorites;
