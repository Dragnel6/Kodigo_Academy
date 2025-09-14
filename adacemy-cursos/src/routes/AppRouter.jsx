import {BrowserRouter, Route, Routes } from "react-router";
import {Login} from "../pages/Login.jsx";
import {UserRegister} from "../pages/UserRegister.jsx";
import LoginAcademy from "../components/LoginAcademy/LoginAcademy.jsx";
import CursosAcademy from "../components/CursosAcademy/CursosAcademy.jsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginAcademy />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/cursos" element={<CursosAcademy />} />
            </Routes>
        </BrowserRouter>
    )
}