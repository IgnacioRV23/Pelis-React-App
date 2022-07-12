import './App.css';
import { useState } from 'react';
import anime from './model/anime.json';
import series from './model/series.json';
import peliculas from './model/peliculas.json';
import { Main } from './components/Main';
import { Detalle } from './components/Detalle';
import { Formulario } from './components/Formulario';
import { Peliculas } from './components/Peliculas';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {

  const [listaPeliculas, setListaPeliculas] = useState(peliculas);

  const [listaSeries, setListaSeries] = useState(series);

  const [listaAnime, setListaAnime] = useState(anime);

  const [validaLayout, setValidaLayout] = useState(false);

  return (
    <div className={validaLayout ? "layout-hidden" : "layout"}>
      <header className="header">
        <div className="container_logo">
          <i className="bi bi-camera-reels-fill camera-logo"></i>
          <h1 className="title-logo">Mispelis.com</h1>
        </div>
        <nav className="nav">
          <BrowserRouter>
            <ul>
              <li>
                <i className="bi bi-house-fill"></i>
                <NavLink to="/">Inicio</NavLink>
              </li>

              <li>
                <i className="bi bi-camera-video-fill"></i>
                <NavLink to="/peliculas">Películas</NavLink>
              </li>

              <li>
                <i className="bi bi-tv-fill"></i>
                <NavLink to="/series">Series</NavLink>
              </li>

              <li>
                <i className="bi bi-eye-fill"></i>
                <NavLink to="/anime">Anime</NavLink>
              </li>

              <li className="container-search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Buscar película" />
              </li>
            </ul>
          </BrowserRouter>
        </nav>
      </header>

      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main listaPeliculas={listaPeliculas} listaSeries={listaSeries} listaAnime={listaAnime} setValidaLayout={setValidaLayout} />} />

            <Route path='/detalle/:tipo/:id' element={<Detalle setValidaLayout={setValidaLayout} />} />
          </Routes>
        </BrowserRouter>
      </main>

      <section className={validaLayout ? "form-hidden" : "form"}>
        <div className="container_form">
          <h3 className="title-form">Lista de Productos</h3>
          <Formulario setListaPeliculas={setListaPeliculas} setListaSeries={setListaSeries} setListaAnime={setListaAnime} />
        </div>
      </section>

      <footer className="footer">
        <p className="footer-copy">
          Todos los derechos reservados &copy; Ignacio Rodríguez Varela | 2022
        </p>

        <p className="footer-help">Ayuda o soporte técnico</p>
      </footer>
    </div>
  );
}

export default App;