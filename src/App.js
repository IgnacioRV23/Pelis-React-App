import './App.css';

function App() {
  return (
    <div className="layout">
      <header className="header">
        <div className="container_logo">
          <i className="bi bi-camera-reels-fill camera-logo"></i>
          <h1 className="title-logo">Mispelis.com</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <i className="bi bi-house-fill"></i>
              <a href="#">Inicio</a>
            </li>

            <li>
              <i className="bi bi-camera-video-fill"></i>
              <a href="#">Películas</a>
            </li>

            <li>
              <i className="bi bi-tv-fill"></i>
              <a href="#">Series</a>
            </li>

            <li>
              <i className="bi bi-eye-fill"></i>
              <a href="#">Anime</a>
            </li>

            <li className="container-search">
              <i className="bi bi-search"></i>
              <input type="text" placeholder="Buscar película" />
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <div className="container_cards">
          <h2 className="title-cards">Películas</h2>

          <article className="card">
            <img src="https://www.cinevistablog.com/wp-content/uploads/2022/03/resena-the-batman-2022.jpg" alt="pelicula" className="image-card" />

            <p className="date-card">2022</p>
            <p className="title-card">The Batman</p>
          </article>
        </div>

        <div className="container_cards">
          <h2 className="title-cards">Series</h2>


          <article className="card">
            <img src="https://www.cinevistablog.com/wp-content/uploads/2022/03/resena-the-batman-2022.jpg" alt="pelicula" className="image-card" />

            <p className="date-card">2022</p>
            <p className="title-card">The Batman</p>
          </article>
        </div>

        <div className="container_cards">
          <h2 className="title-cards">Anime</h2>

          <article className="card">
            <img src="https://www.cinevistablog.com/wp-content/uploads/2022/03/resena-the-batman-2022.jpg" alt="pelicula" className="image-card" />

            <p className="date-card">2022</p>
            <p className="title-card">The Batman</p>
          </article>
        </div>
      </main>

      <section className="form">
        <div className="container_form">
          <h3 className="title-form">Lista de Películas</h3>
          <form>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Género" />
            <input type="text" placeholder="Duración" />
            <input type="text" placeholder="Imagen" />
            <input type="date" className="form-date" />
            <select>
              <option value="">Elegir tipo</option>
              <option value="pelicula">Película</option>
              <option value="serie">Serie</option>
              <option value="anime">Anime</option>
            </select>
            <button className="button">CREAR</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-copy">
          Todos los derechos reservados &copy; Ignacio Rodríguez Varela | 2022
        </p>

        <p className="footer-help">
          <a href="#">Ayuda o soporte técnico</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
