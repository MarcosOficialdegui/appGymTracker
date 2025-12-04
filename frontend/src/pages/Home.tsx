import { Dumbbell, BarChart3, Settings } from "lucide-react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-white text-black">

      {/* HERO */}
     <Hero></Hero>

      {/* BENEFICIOS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14">
          ¿Qué ofrece Athletica?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="border border-gray-300 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <Dumbbell className="w-10 h-10 mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Equipamiento Real</h3>
            <p className="text-gray-700">
              Cada gimnasio carga sus máquinas y elementos. Crear rutinas es más fácil y realista.
            </p>
          </div>

          <div className="border border-gray-300 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <Settings className="w-10 h-10 mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Rutinas Inteligentes</h3>
            <p className="text-gray-700">
              La IA genera planes personalizados según tu nivel, objetivos y limitaciones físicas.
            </p>
          </div>

          <div className="border border-gray-300 p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <BarChart3 className="w-10 h-10 mb-4 text-black" />
            <h3 className="text-xl font-semibold mb-2">Progreso Medible</h3>
            <p className="text-gray-700">
              Gráficos de rendimiento, evolución física y estadísticas detalladas.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          ¿Cómo funciona?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">1. Elegí tu gimnasio</h3>
            <p className="text-gray-700">
              Buscá entre los gimnasios cargados y vinculá tu cuenta al que asistís.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">2. Personalizá tu perfil</h3>
            <p className="text-gray-700">
              Completá datos clave: edad, peso, lesiones, experiencia, objetivos.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">3. Obtené tu rutina</h3>
            <p className="text-gray-700">
              La IA crea un plan basado en tu cuerpo y el equipamiento disponible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para mejorar tu entrenamiento?
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10">
          Unite a cientos de usuarios que ya entrenan con planes ajustados a su realidad.
        </p>

        <button className="px-8 py-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
          Crear cuenta
        </button>
      </section>

    </div>
  );
};

export default Home;

