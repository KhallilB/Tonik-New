import React, { Component } from "react";
import "./Navbar.css";
import logo from "../../assets/new-BrandLogo.jpg";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light navbar-bg">
        <a class="navbar-left" href="#">
          <img src={logo} />
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="" href="/artists">
                <button class="btn btn-primary gradient" type="button">
                  Artists
                </button>
              </a>
            </li>
            <li class="nav-item dropdown">
              <div class="link-container">
                <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle dropbtn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Genres
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item">
              <div class="link-container">
                <a class="" href="/about-us">
                  <button class="btn btn-primary gradient">About Us</button>
                </a>
              </div>
            </li>
            <li class="nav-item">
              <div class="link-container">
                <a class="" href="/faq">
                  <button class="btn btn-primary gradient">FAQ</button>
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0" style={{ float: "right" }}>
            <div style={{ float: "left", marginRight: "40px" }}>
              <input
                style={{ height: "45", marginTop: "14px" }}
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search Tonik"
                aria-label="Search"
              />
              <button class="btn btn-primary my-2 my-sm-0" type="submit">
                Search
              </button>
            </div>
            <a href="#">
              <button
                class="btn btn-primary gradient my-2 my-sm-0"
                type="button"
              >
                Log In
              </button>
            </a>
            <a href="#">
              <button
                class="btn btn-primary gradient my-2 my-sm-0"
                type="button"
              >
                Sign Up
              </button>
            </a>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
