import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default function Navbar() {
  return (
    <>
      <nav className="w-full flex bg-[#58B3D0] h-16 ">
        <Link to="/">
          <h1 className="font-sans text-xl font-bold text-white pt-4">
            Dev MasterClass <span className="text-[#FCE690]">+</span>
          </h1>
        </Link>
        <Menu />
      </nav>
    </>
  );
}

{
  /*   <header>
        <nav>
          <div>
            <h1>Dev MasterClass <span>+</span></h1>
          </div>
          <div>
            <input type="text" placeholder='Buscar' />
            <span>🔍</span>
          </div>
          <ul>
            <li>
              <a href="#cursos">Cursos</a>
            </li>
            <li>
              <a href="#entrar">Entrar</a>
            </li>
          </ul>
          <button>
            Crear Cuenta
          </button>
        </nav>
      </header> */
}
