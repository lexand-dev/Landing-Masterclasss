import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Inicio/Landing";
import Cursos from "./pages/Cursos";
import AdminBoard from "./pages/AdminBoard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/cursos" element={<Cursos/>} />
      <Route path="/admin" element={<AdminBoard/>}/>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
