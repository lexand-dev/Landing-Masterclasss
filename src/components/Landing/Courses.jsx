import { courses } from "../../config/course";
import Course from "./Course";

export default function Courses() {
  return (
    <>
      <section className="bg-[#F2D2FF] flex flex-col place-items-center">
        <h2 className="font-bold text-3xl text-center pt-8">
          Cursos más populares
        </h2>
        <span>Dale un vistazo</span>
        <div className="md:w-auto md:mx-20 md:flex md:place-content-center gap-10 flex-wrap">
          {courses.map((course) => (
            <Course img={course.url} key={course.id} name={course.title} />
          ))}
        </div>
      </section>
    </>
  );
}
