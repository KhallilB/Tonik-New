import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {
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

ReactDOM.render(<App />, document.getElementById("root"));
