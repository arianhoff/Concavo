import React from "react";
import "./contacto.css";


const contacto = () => {
  return (
    <div id="contacto">
      <h3 className="titulo-seccion">Contáctanos</h3>
      <div className="contenedor-form">
        <form
          action="https://formsubmit.co/98aafb6cfa6dc2eb5e4463659afe1345"
          method="POST"
        >
          <div className="fila mitad">
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre Completo"
              className="input-mitad"
            />
            <input
              type="text"
              name="Email"
              placeholder="Dirección de Email"
              className="input-mitad"
            />
          </div>
          <div className="fila">
            <input
              type="text"
              name="Tema"
              placeholder="Tema..."
              className="input-full"
            />
          </div>
          <div className="fila">
            <textarea
              name="Mensaje"
              id=""
              cols="30"
              rows="10"
              placeholder="Tu Mensaje ..."
              className="input-full"
            ></textarea>
          </div>
          <input type="submit" value="Enviar Mensaje" className="btn-enviar" />
        </form>
      </div>
    </div>
  );
};

export default contacto;
