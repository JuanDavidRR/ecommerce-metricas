import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <ul>
        <li>
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Tienda</NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>FAQ</NavLink>
        </li>
        
        <li>
          <NavLink to={"/account"}>Mi cuenta</NavLink>
        </li>
        <li>
          <NavLink className='sign-out' to={"/login"}>Salir</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
