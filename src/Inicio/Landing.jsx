import About from "./About";
import Courses from "./Courses";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import News from "./News";
import Partner from "./Partner";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partner />
      <main className="">
        <Features />
        <About />
        <News />
        <Courses />
      </main>
      <Footer />
    </>
  );
}
