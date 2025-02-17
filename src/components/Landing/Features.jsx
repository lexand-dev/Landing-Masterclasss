import { features } from "../../config/features";

export default function Features() {
  return (
    <section className="bg-[#FCE690]  ">
      <h2 className="font-bold text-3xl text-center pt-8">
        Una clase para <span className="text-[#58B3D0]">todos</span>
      </h2>
      <div className="md:flex md:flex-wrap md:px-24">
        {features.map((feature) => (
          <div
            className="text-center flex flex-col place-items-center w-96 m-auto px-6 pt-8 pb-10"
            key={feature.id}
          >
            <a href="">
              <img
                className="w-24 h-24 mb-3"
                src={feature.img}
                alt={feature.title}
              />
            </a>
            <h4 className="font-bold text-lg my-2">{feature.title}</h4>
            <p className="text-[#595959]">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
