import { createLazyFileRoute } from "@tanstack/react-router";

import Hero from "@/components/Landing/Hero";
import Partner from "@/components/Landing/Partner";
import Features from "@/components/Landing/Features";
import About from "@/components/Landing/About";
import News from "@/components/Landing/News";
import Courses from "@/components/Landing/Courses";

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div>
      <Hero />
      <Partner />
      <main>
        <Features />
        <About />
        <News />
        <Courses />
      </main>
    </div>
  )
}