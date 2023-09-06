import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particles";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
      <Aboutme />
    </>
  );
}

export default App;
