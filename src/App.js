import './App.css';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import anime from './model/anime.json';
import series from './model/series.json';
import peliculas from './model/peliculas.json';
import { useState } from 'react';

function App() {

  const [listaPeliculas, setListaPeliculas] = useState(peliculas);

  const [listaSeries, setListaSeries] = useState(series);

  const [listaAnime, setListaAnime] = useState(anime);

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
        <h2 className="title-cards">Películas</h2>
        <div className="container_cards">
          <Listado listaProductos={listaPeliculas}/>
        </div>

        <h2 className="title-cards">Series</h2>
        <div className="container_cards">
          <Listado listaProductos={listaSeries}/>
        </div>

        <h2 className="title-cards">Anime</h2>   
        <div className="container_cards">
          <Listado listaProductos={listaAnime}/>
        </div>
      </main>

      <section className="form">
        <div className="container_form">
          <h3 className="title-form">Lista de Productos</h3>
          <Formulario setListaPeliculas={setListaPeliculas} setListaSeries={setListaSeries} setListaAnime={setListaAnime}/>
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