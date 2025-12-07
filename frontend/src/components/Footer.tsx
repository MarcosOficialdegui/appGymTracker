const Footer = () => {
  return (
    <footer className="border-t border-gray-300 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        
        <div>
          <h2 className="text-2xl font-bold tracking-wide">Athletica</h2>
          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Plataforma para crear rutinas inteligentes y gestionar tu progreso de entrenamiento.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Secciones</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black transition cursor-pointer">Inicio</li>
            <li className="hover:text-black transition cursor-pointer">Gimnasios</li>
            <li className="hover:text-black transition cursor-pointer">Rutinas</li>
            <li className="hover:text-black transition cursor-pointer">Mi Perfil</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Recursos</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black transition cursor-pointer">Ayuda</li>
            <li className="hover:text-black transition cursor-pointer">Sobre Nosotros</li>
            <li className="hover:text-black transition cursor-pointer">Contacto</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-black transition cursor-pointer">Términos y Condiciones</li>
            <li className="hover:text-black transition cursor-pointer">Política de Privacidad</li>
            <li className="hover:text-black transition cursor-pointer">Cookies</li>
          </ul>
        </div>
      </div>

      
      <div className="border-t border-gray-300 py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Athletica — Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
