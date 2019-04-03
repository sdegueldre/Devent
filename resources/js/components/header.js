import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../assets/logo2.svg';
import { Route, Switch } from 'react-router-dom';

/* Demo */
import profile from '../assets/profile.png';

/* Function for generating a random color for the background of the cards */
/* Testing purpose - will be deleted */
/* style={{background: random_bg_color()}}  */
function random_bg_color() {
    let colors_bright = ["#CC276A", "#C72FA8", "#01CCBC", "#F7BC0B", "#E85E40"];
    let colors = colors_bright;
    let bgColor = colors[Math.floor(Math.random()*colors.length)];

     return bgColor;
    }

export default class Header extends Component {

    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link to="/" className="navbar-brand"><img width="30" height="30" className="d-inline-block align-top mx-2" src={ logo }/>Dev'ent</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Homepage</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events" className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to ="/team" className="nav-link">Team</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
              <div className="navbar-nav ml-auto">
                <div className="btn btn-primary"><a className="profile" href="/logout">Logout</a></div>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="btn btn-primary"><a className="profile" href="/login">Login</a></div>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="btn btn-primary"><a className="profile" href="/register">Register</a></div>
              </div>
              <div className="navbar-nav ml-auto">
                <img src={profile} width="30" height="30" className="d-inline-block align-top" />
                <div className="mx-2"><a className="profile" href="#">Hello James</a></div>
              </div>
            </div>
          </nav>

        );
    }
}
