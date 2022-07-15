import "./Inicio.css";

function inicio() {
  return (
    <div id="inicio">
      <div className="contenido">
        <header>
          <div className="contenido-header">
            <h1>Arian Hoffmann</h1>
            <nav id="nav" className="">
              <ul id="links">
                <li>
                  <a
                    href="#inicio"
                    className="seleccionado"
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <a href="#sobremi">
                    SOBRE MI
                  </a>
                </li>
                <li>
                  <a href="#servicios">
                    SERVICIOS
                  </a>
                </li>
                <li>
                  <a href="#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li>
                  <a href="#contacto">
                    CONTACTO
                  </a>
                </li>
              </ul>
            </nav>

            <div id="icono-nav">
              <i className="fa-solid fa-bars"></i>
            </div>

            <div className="redes">
              <a
                href="https://www.linkedin.com/in/arian-hoffmann-726376161/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.behance.net/arianhoffmann1">
                <i className="fa-brands fa-behance-square"></i>
              </a>
              <a href="https://www.instagram.com/ari.hoffmann/">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="presentacion">
          <p className="bienvenidos">Bienvenidos</p>
          <h2>Soy <span>Arian Hoffmann</span>, Desarrollador Web Full Stack</h2>
          <p className="descripcion">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, nobis
            perspiciatis.
          </p>
          <a href="#portfolio">Ir a Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default inicio;
