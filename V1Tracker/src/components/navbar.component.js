import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">V1Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create a New Log</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}