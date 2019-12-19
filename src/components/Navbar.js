import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    estaAbierto: false
  };
  handleToogle = () => {
    this.setState({ estaAbierto: !this.state.estaAbierto });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo aqui" />
            </Link>

            <button type="button" className="nav-btn">
              <FaAlignRight
                className="nav-icon"
                onClick={this.handleToogle}
              ></FaAlignRight>
            </button>
          </div>
          <ul
            className={
              this.state.estaAbierto ? "nav-links show-nav" : "nav-links"
            }
          >
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
