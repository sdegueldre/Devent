import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import api from '../api';

export default class Logout extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  async componentDidMount() {
    const response = await (api.logout());
    console.log(response.message);

  }
  render(){
    return <Redirect to='/' />
  }
}
