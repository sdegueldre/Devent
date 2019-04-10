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
                    password_confirmation:'',
                    avatar:''
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
        <h1 className="mt-3 mb-2"><i class="far fa-address-card"></i> Register</h1>

          <div className="row">

            <div className="col-sm-8 col-md-10 col-lg-6 mx-auto">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group pt-3">
                  <label className="text-danger h4" htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label className="text-danger h4" htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label className="text-danger h4"  htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label className="text-danger h4" htmlFor="password_confirmation">Confirm password</label>
                  <input type="password" className="form-control" id="password_confirmation" placeholder="Confirm password" value={this.state.password_confirmation} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                  <label className="text-danger h4" htmlFor="avatar">Avatar url</label>
                  <input type="text" className="form-control" id="avatar" placeholder="Enter url for an avatar" value={this.state.avatar} onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-danger px-5 py-2 mb-5 mt-3" value="Submit" />
              </form>
            </div>

          </div>

      </div>
    );
  }
}
