import { useContext } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import "../styles/Orders.scss";
import sumTotal from "../utils/sumTotal";

const Orders = () => {
  const date = new Date();
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
		
    <div className="Orders">
			      <Helmet>
        <meta charSet="utf-8" />
        <title>Ordenes| Tienda Perrona</title>
        <meta
          name="description"
          content="La tienda ideal para todos los desarrolladores"
        />
      </Helmet>
      <Header />
      <div className="Checkout__container">
        <h1 className="Checkout__title">Orden Aprobada</h1>
        <p>Tu pago a sido exitoso, a continuación el resumen de tu compra</p>
        <div className="Checkout__content">
          {cart.map((product, index) => (
            <OrderItem indexValue={index} product={product} key={index} />
          ))}
          <div className="order">
            <p className="order__info">
              <span className="order__date">
                {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
              </span>
              <span className="order__quantity">{cart.length} Artículos</span>
										<p><b>Medio de pago:</b> Tarjeta de crédito</p>

            </p>
            <p className="order__total">TOTAL: $ {sumTotal(cart)}</p>
          </div>
          <p>
            Nuestro equipo te contactará para que recibas novedades de tu pedido por el número de teléfono que registraste en el formulario de pago
          </p>
					<h4>¿Necesitas Soporte con tu pedido?</h4>
					<p>Si no has sido contactado por nuestro equipo y deseas saber el estado o más información de nuestro pedido puedes escribirnos al número de soporte. Con gusto te atenderemos</p>
					<button className="btn-submit">Soporte whatsapp</button>

        </div>
      </div>
    </div>
  );
};

export default Orders;
