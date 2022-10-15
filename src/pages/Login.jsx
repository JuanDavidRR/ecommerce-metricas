import { useRef } from "react";
import "../styles/Login.scss";
import logo from "../assets/logos/logo_yard_sale.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };
  return (
    <div className="login">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Iniciar sesión | Tienda Perrona</title>
        <meta
          name="description"
          content="La tienda ideal para todos los desarrolladores"
        />
      </Helmet>
      <div className="Login__container">
        <img src={logo} alt="logo" className="Login__logo" />
        <h1>Inico de sesión</h1>

        <form action="/" className="form" ref={form}>
          <fieldset>
            <legend>Correo Electronico</legend>
            <input
              className="CreateAccount__value"
              type="email"
              value="Frailejope@email.com"
            />
          </fieldset>
          <fieldset>
            <legend>Contraseña</legend>
            <input
              className="CreateAccount__value"
              type="password"
              value="Frailejope@email.com"
            />
          </fieldset>
          <button
            onClick={handleSubmit}
            className="primary-button Login__button"
          >
            <Link to="/">Iniciar sesión</Link>
          </button>
          <a className="form__forgot-pswd" href="/">
            Forgot my password
          </a>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to="/signup">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
