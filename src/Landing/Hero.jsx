import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Hero() {
  return (
    <header className="md:flex md:flex-col md:place-items-center w-full opacity-90 bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-full p-4 ">
      <div className="text-center pt-36 w-auto ">
        <h2 className="text-white font-bold text-4xl pt-10 pb-10 ">
          ¿Preparado para <span className="text-[#FCE690]">vivir</span> del
          codding
        </h2>
        <p className="pb-16 text-white font-medium">
          ¡Bienvenido a Dev Masterclass! ¿Estás buscando aprender habilidades de
          programación de alta demanda que te ayuden a impulsar tu carrera en
          tecnología? ¡Estás en el lugar correcto!{" "}
        </p>
        <Button>
          <Link to="/cursos">Ver Cursos</Link>
        </Button>
      </div>
    </header>
  );
}
