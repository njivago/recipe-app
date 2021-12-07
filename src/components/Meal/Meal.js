import './Meal.css';
import { Link } from 'react-router-dom';

const Meal = ({ meal, setId, btnFunc, btnTitle, url, setUrl }) => {
  return (
    <div className="meal-block">
      <Link
        to="/recipe-app/recipe"
        onClick={(e) => {
          setId(e.target.dataset.id);
          setUrl(e.target.dataset.url);
        }}
      >
        <img
          src={meal.strMealThumb}
          alt=""
          className="meal-preview"
          data-id={meal.idMeal}
          data-url={url}
        />
      </Link>
      <h4 className="meal-name">{meal.strMeal}</h4>
      <hr className="hr" />
      <p className="meal-description">
        Area - {meal.strArea} <br /> Cattegory - {meal.strCategory}
      </p>
      <button
        className="add-to-fav-btn"
        onClick={() => {
          btnFunc(meal);
          console.log(meal);
        }}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default Meal;
