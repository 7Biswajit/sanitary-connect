
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import About from "./About.js";
import Home from "./Home.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Services from "./Services.js";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
    

  render() {

  
    return (
      <div className="">
        <header className="">
           
              <Router>
              <nav>
                <div className="logo">
                  <img src="logo192.png" alt="reactjs" />
                </div>
                <ul>
                  <li> <Link to="/">Home</Link></li>
                  <li> <Link to="/about">About</Link></li>
                  <li> <Link to="/contactus">Contact us</Link></li>
                  <li> <Link to="/services">Services</Link></li>
                </ul>
              </nav>
                  <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/contactus"><Contact /> </Route>
                    <Route path="/services"><Services /> </Route>
                    <Route path="/"> <Home /> </Route>
                    
                  </Switch>
            </Router>
            <Footer />
        </header>
      </div>
    );
  }
}

export default App;
