import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import "../styles/CreateAccount.scss";

const CreateAccount = () => {
  const form = useRef(null);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const [
    { fullname, nit, email, address, phoneNumber, password },
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
        const createUser = {
          personId: response.data.id,
          password: password,
        };
         axios.post(`${API}/user/create`, createUser).then((res) => {
           try {
             setUser(res);
             console.log('User');
             console.log(res);
           } catch (error) {
             console.log(error);
           }
         });
      } catch (error) {
        console.log(error);
      }
    });
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
              <fieldset>
                <legend>Contraseña</legend>
                <input
                  className="CreateAccount__value"
                  type="password"
                  value={password}
                  name='password'
                  id='password'
                  onChange={handleInputChange}
                />
              </fieldset>
            </section>
          </section>
          <button onClick={createPost} className="primary-button Login__button">
            Crear cuenta
          </button>{" "}
          <p>
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
