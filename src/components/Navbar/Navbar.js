import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearchValue, searchValue }) => {
  return (
    <header>
      <Link to="/" className="nav-link">
        Meals
      </Link>
      <Link to="/recipeBook" className="nav-link">
        Your RecipeBook
      </Link>
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
