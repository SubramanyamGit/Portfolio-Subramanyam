import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Eduction";


const Home = () => {
  return (
    <div
      className="bg-dark text-netural min-h-screen"
      style={{
        backgroundColor: "#1A2238", // Rich Navy
        color: "#E2E8F0", // Neutral light text
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
