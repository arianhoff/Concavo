import React from "react";
import "./servicios.css";

const servicios = () => {
  return (
    <div id="servicios">
      <h3 className="titulo-seccion">NUESTROS SERVICIOS</h3>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
            <i class="fa-solid fa-arrow-pointer"></i>
          </span>
          <h4>Social Media</h4>
          <hr />
          <ul className="servicios-tag">
            <li>
              <b>Redes Sociales</b>
            </li>
          </ul>
          <p>
            Diseño de piezas gráficas para las redes sociales, redacción de
            copies e informe mensual.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i class="fa-solid fa-desktop"></i>
          </span>
          <h4>Animaciones</h4>
          <hr />
          <ul className="servicios-tag">
            <li>
              <b>Videos publicitarios</b>
            </li>
          </ul>
          <p>
            Creación de contenido personalizado para publicación y publicidad de
            las redes sociales.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
            <i class="fa-solid fa-object-group"></i>
          </span>
          <h4>Diseño Gráfico</h4>
          <hr />
          <ul className="servicios-tag">
            <li>
              <b>Logotipo</b>
            </li>
            <li>
              <b>Papelería</b>
            </li>
          </ul>
          <p>
            Diseño de imagen integral para empresas, profesionales o
            emprendedores.
          </p>
        </div>
      </div>
      <div className="fila">
        <div className="servicio">
          <span className="icono">
          <i className="fa-solid fa-pen"></i>
          </span>
          <h4>Diseño Industrial</h4>
          <hr />
          <ul className="servicios-tag">
            <li>
              <b>Diseño de producto</b>
            </li>
          </ul>
          <p>
            Investigación | Concepto de diseño y producto | Ideación y
            representación | Maquetación y prototipo.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
          <i class="fa-brands fa-unity"></i>
          </span>
          <h4>Modelado 3D</h4>
          <hr />
          <ul className="servicios-tag">
            <li><b>Modelado de producto</b></li>
          </ul>
          <p>
            Desarrollo del producto en software 3D y renderizado realista.
          </p>
        </div>
        <div className="servicio">
          <span className="icono">
          <i class="fa-solid fa-compass-drafting"></i>
          </span>
          <h4>Planificación Técnica</h4>
          <hr />
          <ul className="servicios-tag">
            <li><b>Dibujos Técnicos</b></li>
          </ul>
          <p>
            Planos técnicos del producto | Planos técnicos para corte CNC y Láser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default servicios;
