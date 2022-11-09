import React, { useState, useContext } from "react";
import "../styles/Header.scss";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import AppContext from "../context/AppContext";
import MyOrder from "../containers/MyOrder";
import menu from "../assets/icons/icon_menu.svg";
import logo from "../assets/logos/logo_yard_sale.svg";
import shoppingCart from "../assets/icons/icon_shopping_cart.svg";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [toggleDesktop, setToggleDesktop] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {
    state: { cart },
  } = useContext(AppContext);

  const handleClickDesktop = () => {
    setToggleDesktop(!toggleDesktop);
  };

  const handleClickMobile = () => {
    setToggleMobile(!toggleMobile);
  };

  const verifyCart = (cartNumber) => {
    if (cartNumber && cartNumber > 9) {
      return "+9";
    } else {
      return cartNumber;
    }
  };

  return (
    <nav>
      <img src={menu} alt="logo" className="menu" onClick={handleClickMobile} />
      <div className="navbar-left">
        <a href="/" className="nav-logo">
          <img src={logo} alt="logo" />
        </a>
        <ul>
          <li>
            <NavLink to={"/"}>INICIO</NavLink>
          </li>
          {/* <li>
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
          </li> */}
          <li>
            <NavLink to={"/products"}>TIENDA</NavLink>
          </li>
          <li>
            <NavLink to={"/faq"}>FAQ</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleClickDesktop}>
            frailejo
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={shoppingCart} alt="shopping cart" />
            {cart.length > 0 && <div>{verifyCart(cart.length)}</div>}
          </li>
        </ul>
      </div>
      {toggleDesktop && <Menu />}
      {toggleMobile && <MobileMenu />}
      {toggleOrders && (
        <MyOrder
          toggleOrders={toggleOrders}
          setToggleOrders={setToggleOrders}
        />
      )}
    </nav>
  );
};

export default Header;
