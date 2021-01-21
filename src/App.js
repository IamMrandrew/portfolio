import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Thanks from "./components/Thanks";
import Todobubu from "./components/works/Todobubu";
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/profile/thanks" component={Thanks} />
          <Route path={"/works/todobubu"} component={Todobubu} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
