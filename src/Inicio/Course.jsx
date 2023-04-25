export default function Course({ name, img }) {
  return (
    <div className="w-72 my-8 bg-white rounded-lg overflow-hidden shadow-md">
      <div>
        <img className=" h-48 w-full" src={img} alt="" />
      </div>
      <div className="p-4">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Desarrollo Móvil
        </span>
        <h4 className="text-gray-900 font-bold text-xl mb-2 py-3">{name}</h4>

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
  );
}
