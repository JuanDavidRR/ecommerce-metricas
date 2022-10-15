import { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import sumTotal from "../utils/sumTotal";
import "../styles/Checkout.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
  const date = new Date();
  const {
    state: { cart },
  } = useContext(AppContext);

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          distinctio amet facilis dignissimos quos facere corrupti suscipit
          ratione! Debitis consectetur id iste ut earum ipsum laborum deserunt,
          laudantium natus quia.
        </p>
        <p>
          Para esta transacción los datos de la cuenta será utilizados para
          realizar el
        </p>
        <form action="/" className="">
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
          <button className="primary-button Login__button">Pagar</button>{" "}
        </form>
      </section>
    </div>
  );
};

export default Checkout;
