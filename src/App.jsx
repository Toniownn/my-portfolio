import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen text-foreground bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-dots opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[60vh] opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, color-mix(in oklch, var(--brand) 18%, transparent), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 -z-10 h-[60vh] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, color-mix(in oklch, var(--violet) 16%, transparent), transparent 70%)",
          }}
        />

        <Navbar />

        <main className="relative">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="portfolio">
            <Projects />
          </section>
        </main>
        <footer id="contact">
          <Contact />
        </footer>
      </div>
    </MotionConfig>
  );
}

export default App;
