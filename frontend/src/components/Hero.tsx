import { useState, useEffect } from "react";

const Hero = () => {
  const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">

      {/* Imagen de fondo */}
      <img
        src={heroImages[currentImageIndex]}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
        style={{
          objectPosition: "center 20%", 
        }}
      />

      {/* Overlay más oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Texto directo encima */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl">
          Entrenamiento optimizado por IA.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-xl">
          Rutinas personalizadas con IA basadas en tu cuerpo y el equipamiento real de tu gimnasio.
        </p>

        <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-200 transition">
          Comenzar ahora
        </button>
      </div>
    </section>
  );
};

export default Hero;
