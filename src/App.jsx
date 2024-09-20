import SobreMi from './components/SobreMiComponent'
import Proyectos from './components/ProyectosComponent'
import Skills from './components/SkillsComponent'



function App() {
 
  return (
<main className="bg-gray-50 flex-col justify-center items-center">

<header className="fixed top-0 left-0 w-full bg-slate-800 text-white py-4 px-6 flex items-center justify-center z-50">
  <nav className="flex justify-center space-x-6">
    <span className="material-symbols-outlined">code</span>
    <a href="#sobre-mi" className="hover:text-blue-500">Sobre mí</a>
    <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
    <a href="#skills" className="hover:text-blue-500">Skills</a>
    <a href="mailto:gnicuu@gmail.com" className="hover:text-blue-500">Contacto</a>
  </nav>
</header>

<SobreMi/>
<Proyectos/>
<Skills/> 


<footer className='mt-40 w-full bg-slate-800 text-white py-4 px-6 flex flex-col items-center justify-center z-50'>
  <div className='w-full flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0'>
   
    <div className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
      </svg>
      <span>gnicuu@gmail.com</span>
    </div>

  
    <div className='text-center'>
      <p>Gracias por visitar mi sitio web! 😀</p>
    </div>

    
    <div className='text-center sm:text-left'>
      <p>Este sitio está desarrollado con:</p>
      <ul className='mt-2 flex flex-wrap justify-center sm:justify-start gap-2'>
        <li className='text-xs font-light border-gray-700 text-white bg-black px-2 py-1 rounded-full'>HTML</li>
        <li className='text-xs font-light border-gray-700 text-white bg-black px-2 py-1 rounded-full'>React</li>
        <li className='text-xs font-light border-gray-700 text-white bg-black px-2 py-1 rounded-full'>Tailwind</li>
      </ul>
    </div>
  </div>
</footer>


</main>
  )
}

export default App
