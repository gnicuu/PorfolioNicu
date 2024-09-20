function SobreMi () {
    return(
        
  <section id="sobre-mi" className="py-16 md:py-36 w-full mx-auto max-w-4xl">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <div className="flex-shrink-0">
      <img src="../foto_de_perfil.png" alt="George Ionut Nicu" className="rounded-full shadow-lg size-36 mt-10 md:size-44 mr-10" />
    </div>

    <div className="flex-1 md:mr-8">

     
    <h1 className="text-2xl sm:text-3xl font-bold mt-5 text-center sm:text-left">
  Hola, soy <span className='text-blue-500'>George Ionut Nicu</span>, desarrollador FullStack
    </h1>



      <p className="text-gray-800 text-center md:text-lg mt-3">
      Comencé mi trayectoria educativa con un grado superior en <span className="text-yellow-600">administración y mantenimiento de sistemas informáticos en red</span> , donde descubrí mi pasión por la programación web. Esto me llevó a realizar un bootcamp de <span className="text-yellow-600">desarrollo web full stack.</span> Me encanta seguir aprendiendo y mejorar continuamente mis habilidades en el campo del desarrollo web, siempre buscando nuevos retos y oportunidades.
      </p>

      <nav className="flex flex-col gap-4 md:space-x-6 md:flex-row mt-5 ">

      <a href="mailto:gnicuu@gmail.com" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-900 hover:border-gray-700 hover:text-white">
        <svg className="size-4"
        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg> 
        Contáctame</a>

      <a href="https://www.linkedin.com/in/george-ionut-nicu/" target="blank" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border hover:bg-gray-900 hover:border-gray-700 hover:text-white rounded-full">
      <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
      Linkedin</a>

      <a href="../public/CV-Nicu.pdf" download="CV-Nicu.pdf" className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border hover:bg-gray-900 hover:border-gray-700 hover:text-white rounded-full">
      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
      </svg>
        CV</a>

      </nav>
  </div>
  
</div>
</section>
    )
}

export default SobreMi