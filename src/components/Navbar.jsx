import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Calendario</NavLink>
      <NavLink to="/compra">Compra</NavLink>
      <NavLink to="/contador">Contador</NavLink>

    </nav>
  );
};

export default Navbar;
