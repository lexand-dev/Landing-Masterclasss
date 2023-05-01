import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Landing/Landing";
import Navbar from "./Landing/Navbar";
import AdminBoard from "./pages/AdminBoard";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/admin" element={<AdminBoard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
