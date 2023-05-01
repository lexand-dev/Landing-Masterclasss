export default function Button({ name }) {
  return (
    <button className="bg-[#fce690dc] rounded-xl border border-black inline-block cursor-pointer text-base font-semibold leading-normal mb-10 px-8 py-3 transition-all delay-100 ease-in touch-manipulation will-change-transform disabled:pointer-events-none hover:bg-[#FCE690]  shadow-lg hover:translate-y-1 active:shadow-none active:translate-y-0">
      {name}
    </button>
  );
}
