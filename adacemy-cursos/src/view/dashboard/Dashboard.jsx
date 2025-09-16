import "./Dashboard.css"
import { useNavigate } from "react-router"

export const Dashboard = () => {
    const navigate = useNavigate();
    const handleClick = () => {
  navigate('/cursos');
};

  return (
    
    <div className="login-container">       
  <div className="login-box">
    <div className="music">
      <h2>Dashboard</h2>
      <div className="logo-container">
        <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="Logo Kodigo Academy" />
      </div>
    </div>

    
    <div className="dashboard-content">
  <div className="curso-card">
    <h3>👨‍💻 Java Developer</h3>
    <p>Domina Java desde cero y crea aplicaciones backend con Spring Boot y MySQL. Ideal para quienes buscan robustez y profundidad técnica.</p>
  </div>
  <div className="curso-card">
    <h3>🌐 Fullstack Jr</h3>
    <p>Aprende a construir aplicaciones completas con ReactJS, Laravel y MySQL. Perfecto para dar el salto al desarrollo web profesional.</p>
  </div>
  <div className="curso-card">
    <h3>📊 Data Analytics</h3>
    <p>Transforma datos en decisiones con Python, PowerBI y R. Descubre cómo generar insights y visualizaciones impactantes.</p>
  </div>
  <h2 className="dashboard-call">¿Listo para impulsar tu carrera?</h2>
</div>


    
    <button className="btn-login" onClick={handleClick}>Ver más detalles</button>
  </div>
</div>

  )
}
