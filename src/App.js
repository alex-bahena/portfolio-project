import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particles";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <Aboutme />
      <Projects />
      <Experience />
      <Portfolio />
    </>
  );
}

export default App;
