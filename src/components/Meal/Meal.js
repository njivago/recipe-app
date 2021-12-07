import './Meal.css';
import { Link } from 'react-router-dom';

const Meal = ({ meal, setId, btnFunc, btnTitle }) => {
  return (
    <div className="meal-block">
      <Link
        to="/recipe/"
        onClick={(e) => {
          setId(e.target.dataset.id);
        }}
      >
        <img
          src={meal.strMealThumb}
          alt=""
          className="meal-preview"
          data-id={meal.idMeal}
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
        }}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default Meal;
