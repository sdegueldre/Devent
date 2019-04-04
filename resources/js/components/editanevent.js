import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';
/* Demo */
import event05 from '../assets/event05.png';


export default class EditAnEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {  event_title:'',
                    event_time:'',
                    event_description:'',
                    event_city:'',
                    date:'',
                    time:'',
                    event_location:'',
                    event_image:''
                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    window.scrollTo(0, 0)
    let event = (await api.fetchEventSolo(this.props.match.params.id)).events
    event.date = event.event_time.substring(0,10);
    event.time = event.event_time.substring(11,21);
    delete this.state.event_time;
    this.setState(event);
  }

  handleChange(event) {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  async handleSubmit(event) {
  //  alert('An event was created: ' + this.state.event_title);
    event.preventDefault();
    this.state.event_time = this.state.date + ' '+ this.state.time;
    delete this.state.date;
    delete this.state.time;
    const data = JSON.stringify(this.state);
    const response = await (api.editEvents(data, this.props.match.params.id));
    console.log('test')
    console.log(response.message);

  }

  render() {

    return (

      <div className="container">
        <h1>Edit your event</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name="event_title" value={this.state.event_title} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" name="event_description" rows="3" value={this.state.event_description} onChange={this.handleChange} ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="time">Hour</label>
            <input type="time" className="form-control" name="time" value={this.state.time} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" className="form-control" name="event_city" placeholder="City name" value={this.state.event_city} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="adress">Adress</label>
            <input type="text" className="form-control" name="event_location" placeholder="Exact adress" value={this.state.event_location} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input type="text" className="form-control" name="event_image" placeholder="Image URL" value={this.state.event_image} onChange={this.handleChange} />
          </div>

          <input type="submit" className="btn btn-primary ml-3 mb-5" value="Submit" />
        </form>
      </div>
    );
  }
}
