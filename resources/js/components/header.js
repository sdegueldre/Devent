import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/logo2.svg';
/* Demo */
import profile from '../assets/profile.png';

/* Function for generating a random color for the background of the cards */
/* Testing purpose - will be deleted */
function random_bg_color() {
    let colors_bright = ["#CC276A", "#C72FA8", "#01CCBC", "#F7BC0B", "#E85E40"];
    let colors = colors_bright;
    let bgColor = colors[Math.floor(Math.random()*colors.length)];

     return bgColor;
    }

export default class Header extends Component {

    render() {
        return (
          <nav style={{background: random_bg_color()}} className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#"><img width="30" height="30" className="d-inline-block align-top mx-2" src={ logo }/>Dev'ent</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Homepage</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <div className="navbar-nav ml-auto">
                <img src={profile} width="30" height="30" className="d-inline-block align-top" />
                <div className="mx-2"><a className="profile" href="#">Hello James</a></div>
              </div>
            </div>
          </nav>
          
        );
    }
}

if (document.querySelector('.header')) {
    ReactDOM.render(<Header />, document.querySelector('.header'));
}
