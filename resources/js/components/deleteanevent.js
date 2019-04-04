import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import api from '../api';

export default class DeleteAnEvent extends Component {

  constructor(props) {
    super(props);
    this.state = { };
    api.delete();
  }
  render(){
    return <Redirect to='/' />
  }
}
