import Button from "../components/Button";

export default function News() {
  return (
    <section className="bg-[#e8fc90]">
      <h2 className="font-bold text-2xl text-center pt-8">
        ¡PRE-INSCRIPCIÓN PROGRAMACIÓN EN{" "}
        <span className="text-[#58B3D0]">IOS</span> CON SWIFT YA DISPONIBLE!
      </h2>
      <div className="flex flex-col place-items-center">
        <div className="w-72 my-8 bg-white rounded-lg overflow-hidden shadow-md">
          <div className=" h-48 ">
            <img
              src="https://images.pexels.com/photos/243698/pexels-photo-243698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="p-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Desarrollo Móvil
            </span>
            <h4 className="text-gray-900 font-bold text-xl mb-2 py-3">
              Desarrollo de Aplicaciones Móviles: Android y iOS
            </h4>

            <p className="desc text-gray-600 text-base">4 Cursos</p>

            <a
              href="#"
              className=" inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
            >
              Mas info
              <span aria-hidden="true" className="pl-2">
                →
              </span>
            </a>
          </div>
        </div>
        <Button name={"Ver todos los cursos"} />
      </div>
    </section>
  );
}
