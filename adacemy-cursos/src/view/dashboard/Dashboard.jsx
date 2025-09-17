import "./Dashboard.css";
import { useNavigate } from "react-router";

export const Dashboard = () => {
  const navigate = useNavigate();
  const handleClick = (ruta) => {
    navigate(ruta);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    
    <div className="login-container">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="navbar-logo">
          <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="Logo Kodigo Academy" />
        </div>
        <div className="navbar-actions">
          <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
        </div>
      </nav>
      <div className="boxer">
        <div className="dashboard-info-top">
          <div className="academy-info">
            <h3>¡Bienvenido a Kodigo Academy!</h3>
            <p>
              Impulsa tu futuro en tecnología con nuestros programas de formación intensiva. 
              Aprende de expertos, accede a mentorías personalizadas y forma parte de una comunidad que te conecta con oportunidades reales de empleo.
              <br /><br />
              <strong>¿Por qué elegirnos?</strong> Nuestra metodología práctica y el acompañamiento constante te preparan para los retos del mundo digital.
            </p>
            <ul>
              <li>+1000 graduados exitosos</li>
              <li>Alianzas con empresas líderes</li>
              <li>Eventos, networking y comunidad activa</li>
            </ul>
          </div>
        </div>
        {/* Panel de estadísticas rápidas */}
        <div className="dashboard-stats">
          <div className="stat-card">
            <h4>Estudiantes activos</h4>
            <p>320</p>
          </div>
          <div className="stat-card">
            <h4>Cursos disponibles</h4>
            <p>12</p>
          </div>
          <div className="stat-card">
            <h4>Eventos próximos</h4>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h4>Graduados</h4>
            <p>+1000</p>
          </div>
        </div>
        {/* Accesos rápidos (sin el botón de cursos) */}
        <div className="dashboard-access">
          <button className="btn-login" >Mi perfil</button>
          <button className="btn-login" >Comunidad</button>
          <button className="btn-login" >Soporte</button>
        </div>
        <div className="dashboard-callout"> 
          <h2 className="dashboard-call">¿Listo para impulsar tu carrera?</h2>
          <p>Explora nuestros cursos y únete a la comunidad de Kodigo Academy. ¡Tu futuro en tecnología comienza aquí!</p>
        </div>
        {/* Botón de cursos abajo */}
        <div className="dashboard-button">
          <button className="btn-login" onClick={() => handleClick('/cursos')}>Ver cursos</button>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
