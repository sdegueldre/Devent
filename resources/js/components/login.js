import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import api from '../api';

export default class Login extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

  constructor(props) {
    super(props);
    this.state = {  email: '',
                    password: ''
                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(log) {
    let obj = {};
    obj[log.target.id] = log.target.value;
    return this.setState(obj);
  }

  async  handleSubmit(log) {
    log.preventDefault();
    const data = JSON.stringify(this.state);
    const response = await (api.login(data));
    if (response.redirect == 'true'){
      this.props.history.push("/");
      window.location.reload();
    }
    else {
      alert(response.message);
    }
  }

  render() {
    return (
      <div className="container">

        <h1 className="py-4" ><i className="fas fa-sign-in-alt"></i> Log in</h1>

        <div className="row">
          <div className="col-sm-8 col-md-10 col-lg-6 mx-auto">

          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="text-danger h4" htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
            </div>

            <div className="form-group">
              <label className="text-danger h4" htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
            </div>
            <input type="submit" className="btn btn-danger px-5 py-2 mb-5 mt-3" value="Submit" />

          </form>

          </div>
        </div>
      </div>
    );
  }
}
