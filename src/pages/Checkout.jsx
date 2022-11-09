import { useContext, useState } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import sumTotal from "../utils/sumTotal";
import "../styles/Checkout.scss";
import "../styles/CreateAccount.scss";

import axios from "axios";
import { useForm } from "../hooks/useForm";

const Checkout = () => {
  const date = new Date();
  const {
    state: { cart },
  } = useContext(AppContext);

  const [post, setPost] = useState(null);

  const [
    { fullname, nit, email, address, phoneNumber},
    handleInputChange,
  ] = useForm({
    fullname: "",
    nit: 0,
    email: "",
    address: "",
    password: "",
    phoneNumber: 0,
  });

  const API = "http://localhost:3000/api";

  function createPost(e) {
    e.preventDefault();
    const user = {
      nit: nit,
      name: fullname,
      address: 'address',
      cityId: 1,
      email: email,
      phoneNumber: phoneNumber
    };
    console.log(user);

    axios.post(`${API}/person`, user).then((response) => {
      try {
        setPost(response);
        console.log('Persona');
        console.log(response);
        console.log(cart);
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <div className="Checkout">
      <div className="Checkout__container">
        <h1 className="Checkout__title">My order</h1>
        <div className="Checkout__content">
          {cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={index} />
          ))}
          <div className="order">
            <p className="order__info">
              <span className="order__date">
                {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
              </span>
              <span className="order__quantity">{cart.length} articles</span>
            </p>
            <p className="order__total">$ {sumTotal(cart)}</p>
          </div>
        </div>
      </div>
      <section className="Checkout__payment">
        <h1>Checkout</h1>

        <p>
          Para esta transacción los datos de la cuenta será utilizados para
          realizar el
        </p>
        <form action="/" className="">
          <section className="form-container">
            <section>
              <fieldset>
                <legend>Nombre completo</legend>
                <input
                  className="CreateAccount__value"
                  type="text"
                  value={fullname}
                  onChange={handleInputChange}
                  name="fullname"
                  id="fullname"
                />
              </fieldset>
              <fieldset>
                <legend>Documento de identificación</legend>
                <input
                  className="CreateAccount__value"
                  type="number"
                  value={nit}
                  onChange={handleInputChange}
                  name="nit"
                  id="nit"
                />
              </fieldset>
              <fieldset>
                <legend>Correo Electronico</legend>
                <input
                  className="CreateAccount__value"
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  name="email"
                  id="email"
                />
              </fieldset>
            </section>
            <section>
              <fieldset>
                <legend>Número celular</legend>
                <input
                  className="CreateAccount__value"
                  type="number"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </fieldset>
              <fieldset>
                <legend>Dirección de domicilio</legend>
                <input
                  className="CreateAccount__value"
                  type="text"
                  value={address}
                  onChange={handleInputChange}
                  name="address"
                  id="address"
                />
              </fieldset>
            </section>
          </section>
          <fieldset>
            <legend>Número de tarjeta de crédito</legend>
            <input type="number" />
          </fieldset>
          <section className="group-form">
            <fieldset>
              <legend>Nombre en la tarjeta</legend>
              <input type="text" />
            </fieldset>
            <fieldset>
              <legend>Fecha de expiración</legend>
              <input type="date" />
            </fieldset>
          </section>
          <fieldset>
            <legend>CVV</legend>
            <input type="number" max="9999" />
          </fieldset>
          <button onClick={createPost} className="primary-button Login__button">Pagar</button>{" "}
        </form>
      </section>
    </div>
  );
};

export default Checkout;
