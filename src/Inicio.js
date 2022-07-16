import "./Inicio.css";

function inicio() {
  return (
    <div id="inicio">
      <div className="contenido">
        <header>
          <div className="contenido-header">
            <h1>Cóncavo.Design</h1>
            <nav id="nav" className="">
              <ul id="links">
                <li>
                  <a href="#inicio" className="seleccionado">
                    INICIO
                  </a>
                </li>
                <li>
                  <a href="#sobremi">NOSOTROS</a>
                </li>
                <li>
                  <a href="#servicios">SERVICIOS</a>
                </li>
                <li>
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li>
                  <a href="#contacto">CONTACTO</a>
                </li>
              </ul>
            </nav>

            {/* <div id="icono-nav">
              <i className="fa-solid fa-bars"></i>
            </div> */}

            <div className="redes">
              <a href="https://www.behance.net/cncavodesign" target="blank">
                <i className="fa-brands fa-behance-square"></i>
              </a>
              <a href="https://www.instagram.com/concavodesign/" target="blank">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="presentacion">
          <p className="bienvenidos">Bienvenidos</p>
          <h2>
            Somos <span>Cóncavo.Design</span>, Estudio de diseño gráfico e
            industrial.
          </h2>
          <p className="descripcion">
            Amamos el dieños, por eso potenciamos y compartimos la importancia de trabajar por un propósito.
          </p>
          <a href="#portfolio">Ir a Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default inicio;
