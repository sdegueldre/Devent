import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {  email:'',
                    password:''
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(log) {
    let obj = {};
    obj[log.target.id] = log.target.value;
    return this.setState(obj);
  }

  handleSubmit(log) {
    alert('You\'re logged in');
    log.preventDefault();
    const data = JSON.stringify(this.state);
    api.login(data);
    console.log(data);

  }

  render() {
    return (
      <div className="container">
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <input type="submit" className="btn btn-primary ml-3 mb-5" value="Submit" />
        </form>
      </div>
    );
  }
}
