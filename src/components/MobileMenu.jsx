import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div class="mobile-menu">
      <ul>
        <li>
          <NavLink to={"/category/1"}>Ropa</NavLink>
        </li>
        <li>
          <NavLink to={"/category/2"}>Electrodomesticos</NavLink>
        </li>
        <li>
          <NavLink to={"/category/3"}>Muebles</NavLink>
        </li>
        <li>
          <NavLink to={"/category/4"}>Zapatos</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>TIENDA</NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>FAQ</NavLink>
        </li>
        <li>
          <a href="/account" class="email">
            frailejon@gmail.com
          </a>
        </li>
        <li>
          <a href="/signup" class="sign-out">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
