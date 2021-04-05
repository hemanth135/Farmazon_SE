import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SellCrops from "./farmer/SellCrops";
import Navbar from "../components/farmer/Navbar";
import InitNavbar from "../components/farmer/InitNavbar";
import About from "../components/farmer/About";
import Contact from "../components/farmer/Contact";
import Profile from "../components/farmer/Profile";
import SignInCard from "./SignIn/SignInCard";
import FormSignup from "./form/FormSignup";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App1">
          <Switch>
            <Route exact path="/">
              <InitNavbar />
              <SignInCard />
            </Route>

            <Route exact path="/signup">
              <InitNavbar />
              <FormSignup />
            </Route>

            <Route exact path="/profile">
              <Navbar />
              <Profile />
            </Route>

            <Route path="/about">
              <Navbar />
              <About />
            </Route>

            <Route path="/sellCrops">
              <Navbar />
              <SellCrops />
            </Route>

            <Route path="/contact">
              <Navbar />
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
