import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';

export default class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = { };
    api.logout();
  }
  render(){
    return 'hello';
  }
}
