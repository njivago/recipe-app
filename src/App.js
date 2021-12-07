import MealsList from './components/MealsList/MealsList';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router';
import Recipe from './components/Recipe/Recipe';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [meals, setMeals] = useState([]);
  const [id, setId] = useState('');
  const [recipe, setRecipe] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [url, setUrl] = useState('');
  const [favouriteMeals, setFavouriteMeals] = useState([]);

  useEffect(() => {
    meals.forEach((meal) => {
      if (meal.idMeal === id) setRecipe(meal);
    });
  }, [id]);

  useEffect(() => {
    getResponse();
  }, [searchValue]);

  useEffect(() => {
    const favouriteMeals = JSON.parse(localStorage.getItem('favouriteMeals'));
    setFavouriteMeals(favouriteMeals);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favouriteMeals', JSON.stringify(items));
  };

  const addFavouritesMeal = (meal) => {
    let newFavouriteMealsList = [];
    if (favouriteMeals) {
      newFavouriteMealsList = [...favouriteMeals, meal];
      favouriteMeals.forEach((favouriteMeal) => {
        if (favouriteMeal.idMeal === meal.idMeal) newFavouriteMealsList.pop();
      });
    } else newFavouriteMealsList.push(meal);
    setFavouriteMeals(newFavouriteMealsList);
    saveToLocalStorage(newFavouriteMealsList);
  };

  const removeFavouriteMeal = (meal) => {
    const newFavouriteMealsList = favouriteMeals.filter(
      (favouriteMeal) => favouriteMeal.idMeal !== meal.idMeal
    );
    setFavouriteMeals(newFavouriteMealsList);
    saveToLocalStorage(newFavouriteMealsList);
  };

  async function getResponse() {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    );
    const json = await res.json();
    setMeals(json.meals);
  }

  const propertiesObj = {
    setId: setId,
    obj: {
      addFav: addFavouritesMeal,
      removeFav: removeFavouriteMeal,
    },
    setUrl: setUrl,
  };

  return (
    <div className="wrapper">
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route
          path="/recipe-app/"
          element={
            <MealsList props={propertiesObj} isF="false" meals={meals} />
          }
        />
        <Route
          path="/recipe-app/recipeBook"
          element={<MealsList props={propertiesObj} meals={favouriteMeals} />}
        />
        <Route
          path="/recipe-app/recipe"
          element={<Recipe recipe={recipe} url={url} />}
        />
      </Routes>
    </div>
  );
}

export default App;
