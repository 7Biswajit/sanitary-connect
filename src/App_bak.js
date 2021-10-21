
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


class App extends Component{
    constructor(props) {
      super(props);
      this.state = {
        currentPath: "Home"
      };
    }

  render() {

    let {currentPath} = this.state;
    const renderPath = () => {
      if (this.state.currentPath=="Home") {
        return <Home/>;
      } else {
        return <About/>;
      }
    }
    return (
      <div className="">
        <header className="">
          <NavBar/> 
          {renderPath}
          <Contact />  
          <Services />   
          <Footer /> 
        </header>
      </div>
    );
  }
}

export default App;
