import zeldaImage from '../../images/zelda.png'
import Arkanoid from '../../images/arkanoidGame.png'
import buscadorPelis from '../../images/buscadorPelis.png'
import TicTacToe from '../../images/TicTacToe.png'
import tinderSwap from '../../images/tinderSwap.png'
import hackaverse from '../../images/hackaverse.png'

function Proyectos () {
    return(
<section id="proyectos" className="py-16 max-w-7xl mx-auto">
  <div className="flex items-center justify-center">
    <span className="material-symbols-outlined mr-4 mt-1">code</span> 
    <h2 className="text-2xl font-bold text-blue-500">Proyectos</h2>
  </div>
  <p className="ml-10 flex items-center justify-center text-gray-800 text-lg">Estos son algunos de mis proyectos</p>

  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4 sm:px-0">
    {/* Proyecto 1 */}
    <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={zeldaImage} alt="Página de Zelda" />
      <article className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold">The Legend of Zelda Timeline</h2>
        <p>Página sencilla de los juegos de Zelda ordenados por año donde se puede añadir nuevo artículo o borrar uno ya existente.</p>
        <ul className="inline-flex flex-wrap gap-2 mt-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">React</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Tailwind</li>
        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/Zelda-Timeline"  target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://gnicuu.github.io/Zelda-Timeline/" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>

    {/* Proyecto 2 */}
    <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={hackaverse} alt="Página de Hackaverse" />
      <article className="p-4 flex flex-col justify-between flex-grow min-h-[250px]">
        <h2 className="text-2xl font-bold">HACKAVERSE</h2>
        <p>HackaVerse es un proyecto de fin de bootcamp impartido en HACK A BOSS. Consiste en una aplicación web orientada a los Hackathones que permite, si eres administrador, publicar eventos y puntuar a los competidores.</p>
        <ul className="inline-flex flex-wrap gap-2 mt-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">React + Vite</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Tailwind</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">NodeJs</li>
        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/hackatonPFB"  target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://hackaverse-pfb.com/"  target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>

    {/* Proyecto 3 */}
    <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={buscadorPelis} alt="Página para buscar películas" />
      <article className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold">Buscador de películas</h2>
        <p>Página sencilla donde el usuario puede buscar películas y ordenarlas de más nuevas a más antiguas.</p>
        <ul className="inline-flex flex-wrap gap-2 mt-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">React + Vite</li>
        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/Buscador-Peliculas" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://gnicuu.github.io/Buscador-Peliculas/" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>

    {/* Proyecto 4 */}
    <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={TicTacToe} alt="Juego de tres en raya" />
      <article className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold">Tic Tac Toe</h2>
        <p>Juego de tres en raya.</p>
        <ul className="inline-flex flex-wrap gap-2 mt-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">React + Vite</li>
        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/Tic-Tac-Toe" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://gnicuu.github.io/Tic-Tac-Toe/"  target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>

    {/* Proyecto 5 */}
    <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={tinderSwap} alt="Efecto swipe de Tinder" />
      <article className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold">Tinder Swap</h2>
        <p>Efecto de swipe de Tinder.</p>
        <ul className="inline-flex flex-wrap gap-2 mt-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">JavaScript</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">HTML</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">CSS</li>
        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/proyectos-js-vanilla/tree/main/Swipe%20Match%20de%20Tinder"  target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://gnicuu.github.io/proyectos-js-vanilla/Swipe%20Match%20de%20Tinder/" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>

  {/* Proyecto 6 */}
  <li className="bg-card rounded-lg shadow-lg max-w-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl bg-slate-50 flex flex-col justify-between h-full">
      <img src={Arkanoid} alt="Página para buscar películas" />
      <article className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-bold">Arkanoid Game</h2>
        <p>Juego de Arkanoid controlado con el teclado usando sprites</p>
        <ul className="mt-4 flex space-x-4">
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">JavaScript</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">HTML</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">CSS</li>
          <li className="text-xs font-light text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Canvas</li>

        </ul>
        <ul className="mt-4 flex space-x-4">
          <li><a href="https://github.com/gnicuu/proyectos-js-vanilla/tree/main/Breackout-game" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Código</a></li>
          <li><a href="https://gnicuu.github.io/proyectos-js-vanilla/Breackout-game/" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">Ver Demo</a></li>
        </ul>
      </article>
    </li>


  </ul>
</section>
    )
}


export default Proyectos;