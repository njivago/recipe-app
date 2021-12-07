import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setSearchValue, searchValue }) => {
  return (
    <header>
      <NavLink to="/recipe-app/" className="nav-link" activeClassName="active">
        Meals
      </NavLink>
      <NavLink
        to="/recipe-app/recipeBook"
        className="nav-link"
        activeClassName="active"
      >
        Your RecipeBook
      </NavLink>
      <input
        value={searchValue}
        className="header__search"
        placeholder="Search meals"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </header>
  );
};

export default Navbar;
