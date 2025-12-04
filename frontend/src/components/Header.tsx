import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/10 bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <div className="text-2xl font-semibold tracking-tight text-black">
          GymApp
        </div>

        
        <div className="hidden md:flex items-center gap-10 text-black/80 font-medium">
          <a href="/gimnasios" className="hover:text-black duration-150">
            Gimnasios
          </a>
          <a href="/rutinas" className="hover:text-black duration-150">
            Crear Rutina
          </a>
          <a href="/perfil" className="hover:text-black duration-150">
            Mi Perfil
          </a>
        </div>

        
        <div className="hidden md:flex gap-4">
          <a
            href="/login"
            className="px-4 py-2 rounded-md border border-black/20 text-black hover:bg-black hover:text-white duration-200"
          >
            Iniciar Sesión
          </a>
          <a
            href="/register"
            className="px-4 py-2 rounded-md border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black duration-200"
          >
            Registrarse
          </a>
        </div>

      
        <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4 text-black/80 font-medium">
            <a href="/gimnasios" className="hover:text-black duration-150">Gimnasios</a>
            <a href="/rutinas" className="hover:text-black duration-150">Crear Rutina</a>
            <a href="/perfil" className="hover:text-black duration-150">Mi Perfil</a>

            <hr className="border-black/10" />

            <a
              href="/login"
              className="px-4 py-2 rounded-md border border-black/20 text-center hover:bg-black hover:text-white duration-200"
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              className="px-4 py-2 rounded-md bg-black text-white text-center hover:bg-white hover:text-black hover:border-black duration-200 border border-black"
            >
              Registrarse
            </a>
          </div>
        </div>
      )}
    </header>
  );
}