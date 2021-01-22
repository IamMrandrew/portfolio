import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Thanks from "./pages/profile/Thanks";
import Todobubu from "./pages/home/works/Todobubu";
import Loopa from "./pages/home/works/Loopa";

import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/thanks" component={Thanks} />
          <Route path={"/todobubu"} component={Todobubu} />
          <Route path={"/loopa"} component={Loopa} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
