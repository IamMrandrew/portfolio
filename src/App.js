import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Works from "./components/Works";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
