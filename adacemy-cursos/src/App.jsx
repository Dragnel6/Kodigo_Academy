<<<<<<< HEAD
import './App.css';
import {AppRouter} from "./routes/AppRouter.jsx";

function App() {
  return (
    <AppRouter />
=======
import { BrowserRouter, Routes, Route } from 'react-router';
import LoginAcademy from './components/LoginAcademy/LoginAcademy';
import { Dashboard } from './view/dashboard/Dashboard';
import CursosAcademy from './components/CursosAcademy/CursosAcademy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAcademy />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cursos" element={<CursosAcademy />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

