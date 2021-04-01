import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuyCrops from "./farmer/BuyCrops";
import Navbar from "../components/farmer/Navbar";
import About from "../components/farmer/About";
import Contact from "../components/farmer/Contact";
import Profile from "../components/farmer/Profile";

class App extends React.Component {
  render() {
    // return <BuyCrops />;

    return (
      <Router>
        <div className="App1">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/buyCrops">
              <BuyCrops />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
