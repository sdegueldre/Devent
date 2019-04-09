import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo2.svg';
import { Route, Switch } from 'react-router-dom';
import api from '../../api';


/* Demo */
import profile from '../../assets/avatar12.png';

export default class Header extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
      };
    }

    async componentDidMount() {
      let logged = api.islogged();
      if (logged.loggedIn){
        let response = await api.me();
        let refresh = await api.refresh();
        this.setState({loggedIn: logged.loggedIn, profile: response.profile});
      }
    }
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
                  <Link to="/" className="nav-link mx-4 h5">Homepage</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events/page=1" className="nav-link mx-4 h5">Events</Link>
                </li>
                {this.state.loggedIn &&
                  <li className="nav-item">
                    <Link to="/addnewevent" className="nav-link mx-4 h5">Add Event</Link>
                  </li>
                }
                <li className="nav-item">
                  <Link to ="/team" className="nav-link mx-4 h5">Team</Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link mx-4 h5">Contact</Link>
                </li>
              </ul>
              {(this.state.loggedIn== false) &&
                <div className="navbar-nav ml-auto">
                  <div className="btn btn-primary"><a className="login" href="/login">Login</a></div>
                  <div className="btn btn-secondary ml-2"><a className="register" href="/register">Register</a></div>
                </div>
              }
              {this.state.loggedIn &&
              <div className="navbar-nav ml-auto">
                  <img src={profile} width="30" height="30" className="d-inline-block align-top" />
                  <div className="mx-2"><a className="profile" href="#">Hello {this.state.profile.name}</a></div>
                  <div className="btn btn-primary ml-2"><a className="logout" href="/logout">Logout</a></div>
                </div>
              }
            </div>
          </nav>

        );
    }
}
