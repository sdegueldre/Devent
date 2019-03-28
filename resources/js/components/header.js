import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/logo.svg';

export default class Header extends Component {

    render() {
        return (
          <div>coucou </div>


        );
    }
}

if (document.querySelector('.header')) {
    ReactDOM.render(<Header />, document.querySelector('.header'));
}
