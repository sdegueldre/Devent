import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import api from '../../api';

export default class DeleteAnEvent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const response = await (api.deleteEvents(this.props.match.params.id));
    alert(response.message);
  }
  render(){
    return <Redirect to='/' />
  }
}
