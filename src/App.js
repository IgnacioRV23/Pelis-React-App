import './App.css';
import { useState } from 'react';
import anime from './model/anime.json';
import series from './model/series.json';
import peliculas from './model/peliculas.json';
import { Formulario } from './components/Formulario';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Detalle } from './components/Detalle';
import { Main } from './components/Main';

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
        <BrowserRouter>
          <Routes>
            <Route path='/detalle/:tipo/:id' element={<Detalle setValidaLayout={setValidaLayout}/>} />
            <Route path='/' element={<Main listaPeliculas={listaPeliculas} listaSeries={listaSeries} listaAnime={listaAnime} setValidaLayout={setValidaLayout}/>}/>
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