import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';
/* Demo */
import event05 from '../assets/event05.png';


export default class EditAnEvent extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let obj = {};
    obj[event.target.id] = event.target.value;
    this.setState(obj);
  }

  handleSubmit(event) {
    alert('An event was created: ' + this.state.title);
    event.preventDefault();
    JSON.stringify(this.state);

  }

  render() {
    return (
      <div className="container">
        <h1>Add a new event</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id ="title" placeholder="event title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" id="date" value={this.state.date} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time">Hour</label>
            <input type="time" className="form-control" id="time" value={this.state.time} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" id="city" placeholder="City name" value={this.state.city} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="file" className="form-control-file" id="image"/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" rows="3" value={this.state.descritpion} onChange={this.handleChange} ></textarea>
          </div>
          <input type="submit" className="btn btn-primary ml-3 mb-5" value="Submit" />
        </form>
      </div>
    );
  }
}
