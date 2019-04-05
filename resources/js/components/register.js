import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';

export default class Login extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

  constructor(props) {
    super(props);
    this.state = {  name:'',
                    email:'',
                    password:'',
                    password_confirmation:''
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(log) {
    let obj = {};
    obj[log.target.id] = log.target.value;
    return this.setState(obj);
  }

  async handleSubmit(log) {
    log.preventDefault();
    const data = JSON.stringify(this.state);
    const response = await (api.register(data));
    alert(response.message);
    if (response.redirect){
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password_confirmation">Confirm password</label>
            <input type="password" className="form-control" id="password_confirmation" placeholder="Confirm password" value={this.state.password_confirmation} onChange={this.handleChange} />
          </div>
          <input type="submit" className="btn btn-primary ml-3 mb-5" value="Submit" />
        </form>
      </div>
    );
  }
}
