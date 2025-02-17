import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <header className="w-full flex items-center justify-evenly bg-[#58B3D0] h-16 ">
        <Link className="w-56 " to="/">
          <h1 className="font-sans text-2xl font-bold text-white ">
            Dev MasterClass <span className="text-[#FCE690]">+</span>
          </h1>
        </Link>

        <div className="w-72 flex items-center px-3 rounded-md border bg-white ">
          <input
            className="w-60 h-9 rounded-md outline-none"
            type="text"
            placeholder="Buscar"
          />
          <span>🔍</span>
        </div>
        <nav className="w-96">
          <ul className="flex items-center gap-9 text-white font-medium">
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li className="rounded-lg border-yellow-300 border text-black bg-yellow-200 hover:bg-yellow-300 p-2">
              <Link to="/register">Crear cuenta</Link>
            </li>
            <li>
              <Link to="/logout">Salir</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
