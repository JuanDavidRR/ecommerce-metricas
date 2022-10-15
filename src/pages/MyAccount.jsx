import { useState } from "react";
import "../styles/MyAccount.scss";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="MyAccount">
      <h1>My Account</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, deserunt.
      Quisquam distinctio fugit maxime alias, blanditiis quidem est! Rem hic ea
      incidunt iusto atque maxime veritatis qui quia exercitationem molestias.
      <div className="MyAccount__container">
        <section className="MyAccount__support">
          <h2>Necesitas soporte?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            odit atque, dolorem odio enim ad aut assumenda in accusamus. Officia
            vero repellendus aliquid laudantium aspernatur voluptas est
            cupiditate eaque et.
          </p>
          <ul>
            <li>Número de tu agente: +57 324-234-2455</li>
            <li>Correo: noseque@poner.com</li>
            <li>Oficina: Calle 97#16-4h</li>
            <button className="btn-submit">Soporte whatsapp</button>
          </ul>
        </section>
        <section className="MyAccount__info">
          <section>
            <button
              className={activeTab === "account" ? "btn-tab active" : "btn-tab"}
              onClick={() => setActiveTab("account")}
            >
              Mi información
            </button>
            <button
              className={activeTab === "history" ? "btn-tab active" : "btn-tab"}
              onClick={() => setActiveTab("history")}
            >
              Historial Compras
            </button>
          </section>
          {activeTab === "account" && (
            <section id="account">
              <form action="/" className="MyAccount__form">
                <section>
                  <fieldset>
                    <legend>Nombre completo</legend>
                    <input
                      className="MyAccount__value"
                      type="text"
                      value="Frailejón Peréz"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Documento de identificación</legend>
                    <input
                      className="MyAccount__value"
                      type="number"
                      value="10292876"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Correo Electronico</legend>
                    <input
                      className="MyAccount__value"
                      type="email"
                      value="Frailejope@email.com"
                    />
                  </fieldset>
                </section>
                <section>
                  <fieldset>
                    <legend>Número celular</legend>
                    <input
                      className="MyAccount__value"
                      type="number"
                      value="3239482723"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Dirección de domicilio</legend>
                    <input
                      className="MyAccount__value"
                      type="text"
                      value="Calle 97#16-34"
                    />
                  </fieldset>
                  <fieldset>
                    <legend>Contraseña</legend>
                    <input
                      className="MyAccount__value"
                      type="password"
                      value="Frailejón Peréz"
                    />
                  </fieldset>
                </section>
                <input
                  type="submit"
                  value="Edit"
                  className="btn-submit"
                />
              </form>
            </section>
          )}
          {activeTab === "history" && (
            <section id="history">
              <h2>Historial de compras</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, quas hic at consectetur, repudiandae animi quibusdam
                veritatis eligendi delectus laboriosam nostrum in porro error
                minus perspiciatis cupiditate dolores placeat eaque!
              </p>
            </section>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyAccount;
