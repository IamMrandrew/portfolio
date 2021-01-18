import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Thanks from "./components/Thanks";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/profile/thanks" exact component={Thanks} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
