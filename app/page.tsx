import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Hobbies } from "@/components/hobbies";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Hobbies />
        <Footer />
      </main>
    </>
  );
}
