import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div className="flex items-center ">
        <input
          className="w-60 h-9 rounded-md"
          type="text"
          placeholder="Buscar"
        />
        <span>🔍</span>
        <ul className="flex gap-6">
          <li>
            <NavLink to="/cursos">Cursos</NavLink>
          </li>
          <li>
            <NavLink to="/login">Entrar</NavLink>
          </li>
          <li>
            <NavLink to="/register">Crear cuenta</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Salir</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
