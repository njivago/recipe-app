import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearchValue, searchValue }) => {
  return (
    <header>
      <Link to="/" className="nav-link">
        Recipes Book
      </Link>
      <Link to="/recipeBook" className="nav-link">
        Favourites
      </Link>
      <input
        value={searchValue}
        className="header__search"
        placeholder="Search"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </header>
  );
};

export default Navbar;
