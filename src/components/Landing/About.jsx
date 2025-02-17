import { Link } from "@tanstack/react-router";
import Button from "../Button";

export default function About() {
  return (
    <section className="bg-black">
      <div className="  py-12 px-3 m-auto flex flex-col place-items-center md:flex-row flex-wrap justify-evenly">
        <div className="flex flex-col place-items-center md:w-[650px] md:">
          <h2 className="text-white text-center text-xl font-bold">
            ¡Únete a la comunidad de Dev Masterclass y comienza a aprender
            habilidades de programación de alta demanda ahora!
          </h2>
          <p className="text-white text-center pt-10 pb-3">
            Con nuestro listado completo de cursos, podrás encontrar fácilmente
            el curso adecuado para ti. Además, nuestro sistema de búsqueda
            avanzada te permite buscar cursos por lenguaje de programación,
            nivel de habilidad y duración del curso.
          </p>
          <p className="text-white text-center pb-10">
            ¡Encuentra el curso perfecto para ti en solo unos clics! Elige tu
            curso e inscribite ¡Únete a Dev Masterclass hoy mismo y comienza a
            aprender habilidades de programación que transformarán tu carrera en
            tecnología!
          </p>
          <Button>
            <Link to="/cursos">Cursos</Link>
          </Button>
        </div>

        <div className="flex flex-col place-items-center md:w-96">
          <p className="font-sans text-4xl font-bold text-white pt-4">
            Dev MasterClass <span className="text-[#FCE690] font-bold">+</span>
          </p>
        </div>
      </div>
    </section>
  );
}
