import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
		  username: formData.get('email'),
		  password: formData.get('password'),
		}
		console.log(data);
	  }
  return (
    <div className="CreateAccount">
      <div className="CreateAccount__container">
        <form action="/" className="CreateAccount__form">
		<h1 className="CreateAccount__title">Registro</h1>

          <section className="form-container">
            <section>
              <fieldset>
                <legend>Nombre completo</legend>
                <input
                  className="CreateAccount__value"
                  type="text"
                  value="Frailejón Peréz"
                />
              </fieldset>
              <fieldset>
                <legend>Documento de identificación</legend>
                <input
                  className="CreateAccount__value"
                  type="number"
                  value="10292876"
                />
              </fieldset>
              <fieldset>
                <legend>Correo Electronico</legend>
                <input
                  className="CreateAccount__value"
                  type="email"
                  value="Frailejope@email.com"
                />
              </fieldset>
            </section>
            <section>
              <fieldset>
                <legend>Número celular</legend>
                <input
                  className="CreateAccount__value"
                  type="number"
                  value="3239482723"
                />
              </fieldset>
              <fieldset>
                <legend>Dirección de domicilio</legend>
                <input
                  className="CreateAccount__value"
                  type="text"
                  value="Calle 97#16-34"
                />
              </fieldset>
              <fieldset>
                <legend>Contraseña</legend>
                <input
                  className="CreateAccount__value"
                  type="password"
                  value="Frailejón Peréz"
                />
              </fieldset>
            </section>
          </section>
		  <button onClick={handleSubmit} className="primary-button Login__button">
            Crear cuenta
					</button>		  <p>¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión</Link></p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
