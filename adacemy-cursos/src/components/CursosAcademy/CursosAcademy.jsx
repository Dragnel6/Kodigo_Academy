import "./Cursos.css";
import { useEffect, useState } from "react";

function CursosAcademy() {
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCursos = async () => {
      const token = localStorage.getItem("token");
      let response, data;
      try {
        if (token) {
          response = await fetch("http://localhost:3000/api/auth/bootcamps/all", {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          });
          if (response.ok) {
            data = await response.json();
            setBootcamps(data);
            setLoading(false);
            return;
          }
        }
        // Si no hay token o la petición protegida falla, intenta la pública
        response = await fetch("http://localhost:3000/api/auth/bootcamps/public");
        if (response.ok) {
          data = await response.json();
          setBootcamps(data);
        } else {
          setError("No se pudieron cargar los cursos");
        }
      } catch (err) {
        setError("No se pudieron cargar los cursos");
      } finally {
        setLoading(false);
      }
    };
    fetchCursos();
  }, []);

  const filtered = bootcamps
    .filter(b => b.active) // solo cursos activos
    .filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="cursos-page">
      <header className="cursos-header">
        <a href="/dashboard">Volver atras</a>
        <h1>Todos los cursos</h1>
      </header>

      <div className="cursos-toolbar">
        <button className="btn-filtro">Filtros</button>
        <input
          type="text"
          placeholder="Buscar cursos"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="input-buscar"
        />
      </div>

      {loading ? (
        <p className="text-center">Cargando Cursos...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="cursos-grid">
          {filtered.map(b => (
            <div key={b.id} className="curso-card">
              <div className="curso-body">
                <h3>{b.name}</h3>
                <p className="curso-desc">{b.description}</p>
                <p className="curso-info">
                  <span>Tecnologías: {b.technologies?.join(", ") ?? "N/A"}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CursosAcademy;
