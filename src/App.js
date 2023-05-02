import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particle from "./components/Particles";

function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
