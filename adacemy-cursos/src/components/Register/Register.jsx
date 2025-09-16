import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function Register() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => setForm(prev => ({...prev, [e.target.name]: e.target.value}));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("http://localhost:3000/api/auth/register", form);
      // si el backend devuelve token directo, guárdalo; si no, redirige a login
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/cursos");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error en registro");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" value={form.username} onChange={handleChange} placeholder="Usuario" required />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Contraseña" required />
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}
