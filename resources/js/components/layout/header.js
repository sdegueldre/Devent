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
      if (logged){
        let profile = await api.me();
        if(profile)
          this.setState({loggedIn: logged, profile: profile});
        else
          this.setState({loggedIn: false, profile: null});
      }
    }
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <Link to="/" className="navbar-brand"><img width="30" height="30" className="d-inline-block align-top mx-2" src={ logo }/>Dev'ent</Link>
            <button className="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-danger">Homepage</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events/page=1" className="nav-link text-danger">Events</Link>
                </li>
                {this.state.loggedIn &&
                  <li className="nav-item">
                    <Link to="/addnewevent" className="nav-link text-danger">Add Event</Link>
                  </li>
                }
                <li className="nav-item">
                  <Link to ="/team" className="nav-link text-danger">Team</Link>
                </li>
                <li className="nav-item">
                  <Link to="contact" className="nav-link text-danger">Contact</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
              {(this.state.loggedIn== false) &&
                <li className="navbar-item ml-auto">
                  <a className="login text-white py-0" href="/login"><div className="btn btn-danger mr-3">Login</div></a>
                  <a className="register text-white  py-0" href="/register"><div className="btn btn-danger">Register</div></a>
                </li>
              }
              {this.state.loggedIn &&
                <>
                  <li className="nav-item d-flex align-items-center hello">
                    <img src={this.state.profile.avatar} width="30" height="30" className="avatar d-inline-block rounded-circle mr-2" />Hello {this.state.profile.name}
                  </li>
                  <li>
                    <a className="nav-link logout text-white py-0" href="/logout"><div className="btn btn-danger mr-4">Logout</div></a>
                  </li>
                </>
              }
              </ul>
            </div>
          </nav>

        );
    }
}
