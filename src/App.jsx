import { BrowserRouter, Routes, Route } from 'react-router';
import LoginAcademy from './components/LoginAcademy/LoginAcademy';
import CursosAcademy from './components/CursosAcademy/CursosAcademy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAcademy />} />
        <Route path="/cursos" element={<CursosAcademy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

