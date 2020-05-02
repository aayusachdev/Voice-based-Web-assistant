import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="app-heading">Welcome!</h1>
        <div className="app-options">
          <li>
            <Link to="/camera">Start Video Recording</Link>
          </li>
        </div>
      </div >
    );
  }
}
