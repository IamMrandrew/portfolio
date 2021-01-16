import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Works from "./components/Works";

import "./App.css";

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
