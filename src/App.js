// import './App.css';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"


function App() {
  return (
    <div className="app-whole">
      {/* <img src="" style={{ height: `100%`, marginLeft: `-2%`}}></img> */}
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
