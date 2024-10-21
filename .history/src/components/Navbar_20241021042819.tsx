import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/category/fire">Fire</NavLink></li>
        <li><NavLink to="/category/water">Water</NavLink></li>
        <li><NavLink to="/category/grass">Grass</NavLink></li>
        <li><NavLink to="/category/electric">Electric</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
