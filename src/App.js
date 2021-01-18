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
import "./App.css";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/thanks" exact component={Thanks} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
