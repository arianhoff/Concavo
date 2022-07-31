import React from 'react'
import './portfolio.css'
import Imagen from './assets/portfolio.jpg'
import Sediferente from "./assets/sediferente.jpg"
import Telohacemos from "./assets/telohacemos.jpg"
import Sjdesarrollos from "./assets/sjdesarrollos.jpg"
import Mesaune from "./assets/mesaune.jpg"
import Sopladora from "./assets/sopladora.jpg"

const portfolio = () => {
  return (
    <div id="portfolio">
         <h3 className="titulo-seccion">Proyectos</h3>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Sediferente} alt="Imagen del Proyecto"/>
            <div className="info">
              <a href='https://www.behance.net/gallery/149126825/Social-Media-Se-diferente-academia' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Telohacemos} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/gallery/149180367/Social-Media-Te-lo-hacemos-Facil' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Sjdesarrollos} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/gallery/149185433/Social-Media-Sj-Desarrollos' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Mesaune} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/gallery/149128453/Mesa-Une-Industrial-Design' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Sopladora} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/gallery/149363805/Diseno-Insdustrial-Sopladora-Greenworks' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fila">
        {/* <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto" />
            <div className="info">
            <a href='https://www.behance.net/' target="blank">
              <h4>Descripción Del Proyecto</h4>
              <p>Diseño Web</p>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default portfolio