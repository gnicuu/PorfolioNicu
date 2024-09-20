import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-800 text-white py-4 px-6 flex items-center justify-between z-50">
      <div className="flex items-center">
        <span className="material-symbols-outlined">code</span>
        <h1 className="ml-2 text-xl font-bold">Mi Portafolio</h1>
      </div>

      <button 
        className="md:hidden flex items-center" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      <nav className={`absolute top-full left-0 w-full bg-slate-800 ${menuOpen ? 'block' : 'hidden'} md:flex md:static md:w-auto`}>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-6 md:space-y-0">
          <a href="#sobre-mi" className="hover:text-blue-500">Sobre mí</a>
          <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="mailto:gnicuu@gmail.com" className="hover:text-blue-500">Contacto</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
