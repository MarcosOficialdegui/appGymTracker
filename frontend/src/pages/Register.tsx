import { useState } from "react";
import { Eye, EyeOff, Dumbbell } from "lucide-react";
import { toast } from "react-toastify";
import { CustomToast } from "../components/CustomToast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast(<CustomToast message={data.message || "Error al registrarse"} />);
        return;
      }

      localStorage.setItem("token", data.token);

      toast(<CustomToast message="Usuario creado correctamente" />);
      
      // Redirigir al home después de 1s
      setTimeout(() => navigate("/"), 1000);

    } catch (err) {
      toast(<CustomToast message="Error de conexión con el servidor" />);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 px-4">
      <div className="relative w-full max-w-md p-10 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.05)] animate-fadeIn">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white p-4 rounded-full shadow-md">
          <Dumbbell className="w-8 h-8" />
        </div>

        <h1 className="text-2xl font-bold text-neutral-900 mt-6 text-center tracking-tight">
          Crear cuenta
        </h1>

        <form className="space-y-5 mt-6" onSubmit={handleRegister}>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-neutral-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-black focus:outline-none transition"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-neutral-300 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-black focus:outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-black transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-lg font-semibold hover:bg-neutral-800 transition shadow-sm"
          >
            Registrarme
          </button>
        </form>

        <p className="text-center text-sm text-neutral-600 mt-4">
          ¿Ya tenés cuenta?{" "}
          <a href="/login" className="font-medium text-black hover:underline">
            Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
