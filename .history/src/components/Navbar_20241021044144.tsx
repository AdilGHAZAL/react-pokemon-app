import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/category/fire">Feu</NavLink></li>
        <li><NavLink to="/category/water">Eau</NavLink></li>
        <li><NavLink to="/category/earth">Terre</NavLink></li>
        <li><NavLink to="/category/air">Air</NavLink></li>
        <li><NavLink to="/category/plant">Plante</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
