import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';
import '../../sass/event.scss';
/* Demo */
import eventimg from '../assets/event05.png';

export default class Eventsolo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventSolo: [],
      events: [],
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0)
    this.setState(await api.fetchEventSolo(this.props.match.params.id));
    let {events} = (await api.fetchEvents());
    for(let i = 0; i < 3; i++){
      events.splice(Math.random*events.length, 1);
    }
    this.setState({events: events});
  }

    render() {
      const { eventSolo, events } = this.state;

      return (
        <div className="container">
        <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Event</h1>
          <div className="row">
            <div className="eventCard col-lg-8">
              <div className="eventHeaderImg" style={{ backgroundImage: 'url('+eventSolo.event_image+')' }}>
                <div className="eventTitle"><p>{eventSolo.event_title}</p></div>
              </div>
              <div className="eventBody">
                <p>{eventSolo.event_description}</p>
              </div>
            </div>
            
            <div className="eventFeed col-lg-4">
              <div className="card-deck">
              {events.map(events =>
                  <div key={events.id} className="col-lg col-md-6 col-xs-12 mb-5 mt-2">
                    <div className="card-content">
                      <div className="card-img-feed">
                        <img src={events.event_image} alt=""/>
                        <span className="date"><h4><i className="fas fa-calendar"></i> {events.event_time} </h4></span>
                        <span className="city"><h4><i className="fas fa-map-marker-alt"></i> {events.event_city}</h4></span>
                      </div>
                      <div className="card-desc">
                        <h3>{events.event_title}</h3>
                        <p>{events.event_description}</p>
                      </div>
                    </div>
                    <button type="button" className="btn-card btn-primary btn-lg btn-block">Show more cool events</button>
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
    )};
  }
