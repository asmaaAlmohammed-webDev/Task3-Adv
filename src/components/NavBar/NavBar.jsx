import { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ links, logo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" data-aos="zoom-in" data-aos-duration="1500">
      <div className="logo">
        <img src={logo.imgSrc} alt={logo.alt} />
        <h1>{logo.title}</h1>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <img src="/assets/imgs/VectorStroke)(2).svg" alt="menu" />
      </button>

      <ul className={`items ${menuOpen ? "show" : ""}`}>
        {links?.map((link, index) => (
          <li key={index} className="item">
            <NavLink
              to={link?.path}
              onClick={handleItemClick}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
