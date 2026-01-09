import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <section id="home" className="h-screen ">
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
  );
}

export default App;
