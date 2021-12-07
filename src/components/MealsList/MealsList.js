import Meal from '../Meal/Meal';
import './MealsList.css';

const MealsList = ({ props, meals, isF }) => {
  let func, funcTitle, url;

  if (!meals) {
    return (
      <span className="error">
        Sorry, but we can`t find meals with this name...
      </span>
    );
  }

  if (isF === 'false') {
    func = props.obj.addFav;
    funcTitle = 'Add to your Recipe Book';
    url = '/';
  } else {
    func = props.obj.removeFav;
    funcTitle = 'Remove from your Recipe Book';
    url = '/recipeBook';
  }

  return (
    <div className="meal-list">
      {meals.map((meal) => {
        return (
          <Meal
            meal={meal}
            setId={props.setId}
            btnFunc={func}
            btnTitle={funcTitle}
            url={url}
            setUrl={props.setUrl}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
