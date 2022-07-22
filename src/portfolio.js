import React from 'react'
import './portfolio.css'
import Imagen from './assets/portfolio.jpg'

const portfolio = () => {
  return (
    <div id="portfolio">
         <h3 className="titulo-seccion">Proyectos</h3>
      <div className="fila">
        <div className="proyecto">
          <div className="overlay">
            <img src={Imagen} alt="Imagen del Proyecto"/>
            <div className="info">
              <a href='https://www.behance.net/' target="blank">
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
    </div>
  )
}

export default portfolio