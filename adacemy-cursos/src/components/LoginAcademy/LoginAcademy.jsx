import "./Login.css";
import { useState } from 'react';
import { useNavigate, Link } from 'react-router';

const POST_URL = "http://localhost:3000/api/auth/login";

function LoginAcademy() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Error en el login');
      }
    } catch (err) {
      setError('Error de conexión');
    }
  };

  return (
    <div className="loginacademy-container">
      <div className="loginacademy-box">
        <div className="loginacademy-music">
          <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="" />
          <h2>Iniciar sesión</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="loginacademy-input-group">
            <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="loginacademy-input-group">
            <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
          <button type="submit" className="loginacademy-btn-login"> Iniciar </button>
        </form>
        <div className="loginacademy-footer">
          <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
        </div>
      </div>
      {/* Imagen a la par del formulario en forma horizontal */}
      <div className="loginacademy-image">
        <img src="https://academy.kodigo.org/pluginfile.php/1/theme_mb2nl/logo/1757611432/logo.png" alt="Logo" />
      </div>
    </div>
  );
}

export default LoginAcademy;