import LoginAcademy from "./components/LoginAcademy/LoginAcademy"
import { BrowserRouter, Route, Routes } from 'react-router'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginAcademy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
