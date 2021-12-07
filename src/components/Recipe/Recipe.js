import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe, url }) => {
  let ingridients = [];

  for (let key in recipe) {
    if (key.includes('strIngredient') && recipe[key] !== '') {
      ingridients.push(recipe[key]);
    }
  }

  return (
    <>
      <div className="recipe-block">
        <div className="title-block">
          <img src={recipe.strMealThumb} alt="" className="preview" />
          <h4 className="title">{recipe.strMeal}</h4>
          <p>
            Area - {recipe.strArea} <br /> Cattegory - {recipe.strCategory}
          </p>
        </div>
        <div className="instructions-block">
          <div className="ingredients">
            <span className="ingredients-heading">Ingridients: </span>
            {ingridients.map((ingridient) => `${ingridient}, `)}
          </div>
          <div className="instruction">
            <p>{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
      <Link to={url}>
        <button className="back-btn"> Back</button>
      </Link>
    </>
  );
};

export default Recipe;
