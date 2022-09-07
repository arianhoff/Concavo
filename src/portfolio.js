import React from "react";
import "./portfolio.css";
import Oroverde from "./assets/oroverde.png";
import Sediferente from "./assets/sediferente.jpg";
import Telohacemos from "./assets/telohacemos.jpg";
import Sjdesarrollos from "./assets/sjdesarrollos.jpg";
import Mesaune from "./assets/mesaune.jpg";
import Tools from "./assets/toolsportada.jpg";

const portfolio = () => {
  return (
    <div id="portfolio">
      <h3 className="titulo-seccion">Proyectos</h3>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Oroverde} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/150979249/Oro-Verde-Aserradero-%28Social-Media%29"
                target="blank"
              >
                <h4>Oro Verde</h4>
                <p>Aserradero</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Tools} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/149367327/Social-Media-Tools-Ferreteria"
                target="blank"
              >
                <h4>Tools</h4>
                <p>Ferretería</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Sjdesarrollos} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/149185433/Social-Media-Sj-Desarrollos"
                target="blank"
              >
                <h4>Sj Desarrollos</h4>
                <p>Constructora</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Sediferente} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/149126825/Social-Media-Se-diferente-academia"
                target="blank"
              >
                <h4>Se diferente</h4>
                <p>Academia</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Telohacemos} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/149180367/Social-Media-TLH-Facil-Supermercado-Market"
                target="blank"
              >
                <h4>Te lo hacemos Fácil</h4>
                <p>Supermercado</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Mesaune} alt="Imagen del Proyecto" />
            <div className="info">
              <a
                href="https://www.behance.net/gallery/149128453/Mesa-Une-Industrial-Design"
                target="blank"
              >
                <h4>Mesa Une</h4>
                <p>Proyecto DI</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="botonglobal">
        <a className="boton" href="https://www.behance.net/cncavodesign" target="blank">Visita nuestro Behance</a>
      </div>
    </div>
  );
};

export default portfolio;
