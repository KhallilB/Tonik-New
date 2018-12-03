import React, { Component } from "react";

import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="background">
        <div className="navbar">
          <Navbar />
        </div>
        <Landing />
      </div>
    );
  }
}

export default App;
