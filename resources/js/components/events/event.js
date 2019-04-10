import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import {Link} from 'react-router-dom';
import Card from '../layout/card';
import '../../../sass/event.scss';
import Moment from 'react-moment';

/* Demo purpose only */
import attendee from '../../assets/avatar10.png';
import author from '../../assets/avatar03.png';
import map from '../../assets/map.png';

export default class Eventsolo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventSolo: [],
      eventSoloAuthor: [],
      eventSoloAttendees: [],
      events: [],
    };

    this.reload = this.reload.bind(this);
  }

  async reload(id = null){
    id = id == null ? this.props.match.params.id : id;
    window.scrollTo(0, 0)
    this.setState(await api.fetchEventSolo(id));
    // Fetch events and show 3 at random
    let {events} = (await api.fetchEvents());
    events = events.filter(e => e.id != id);

    while(events.length > 3){
      events.splice(Math.random()*events.length, 1);
    }
    this.setState({events: events});
  }

  componentDidMount() {
    this.reload();
  }

    render() {
      const { eventSolo, events, eventSoloAuthor, eventSoloAttendees } = this.state;

      return (
        <div className="container" key={this.key}>
        <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Event</h1>
          <div className="row">
            <div className="col-lg-8 col-xs-12 mb-3">
              <div className="eventHeaderImg" style={{ backgroundImage: 'url('+eventSolo.event_image+')', marginBottom: '-72px'}}>
                <div className="eventTitle"><p>{eventSolo.event_title}</p></div>
              </div>
              <div className="eventAttending sticky-top" style={{ zIndex: '2' }}>
                <div  style={{height: '72px'}}></div>
                <input id="toggle-7" className="toggle toggle-yes-no" type="checkbox" />
                <label htmlFor="toggle-7" data-on="Going" data-off="Not going"></label>
              </div>
              <div className="eventBody mt-3 clearfix">
                <h3><i className="far fa-clock"></i> <Moment format="DD MMMM Y - H:mm">{eventSolo.event_time}</Moment></h3>
                <div className="col">
                  <h4>Description</h4>
                    <div className="map-placeholder">
                      <img className="map-img" src={map}/>
                    </div>
                  <p>{eventSolo.event_description}</p>
                </div>
              </div>
              <div className="attendee">
                <h3 className="mt-3">{eventSoloAttendees.length} attendees</h3>
                  <div className="attendee-list">
                    {eventSoloAttendees.map(eventSoloAttendees =>
                      <div className="card bg-white text-center" key={eventSoloAttendees.id} style={{border: 'none'}}>
                        <img className="card-img-top" src={eventSoloAttendees.avatar} alt="Attendee"/>
                        <div className="card-body">
                          <p className="card-text">{eventSoloAttendees.name}</p>
                        </div>
                      </div>
                    )}
                  </div>
              </div>
              <div className="buttons">
                <div className="btn btn-primary px-3 py-2 mr-4"><a className="Delete text-white" href={"/deleteanevent/"+eventSolo.id}>Delete</a></div>
                <div className="btn btn-success px-4 py-2 ml-4"><a className="Edit text-white" href={"/editanevent/"+eventSolo.id}>Edit</a></div>
                  {this.state.logged &&
                    <div className="container my-4">
                      <Link to="/addnewevent">
                        <button type="button" className="btn-card btn-light btn-lg btn-block">Add a new event</button>
                      </Link>
                    </div>
                  }
              </div>
              <div className="author">
                <img src={eventSoloAuthor.avatar}/>
                <p>This event was created by {eventSoloAuthor.name} on the <Moment format="DD MMMM Y">{eventSolo.created_at}</Moment></p>
              </div>
            </div>

            {/* Events feed */}
            <div className="col-lg-4 col-xs-12 sticky-top" style={{ zIndex: '2' }}>
              <h3 className="mb-2"><i className="fas fa-list"></i> Others cool events</h3>
              {events.map(events =>
                <Card key={events.id} events={events} reload={this.reload} classes="mb-3"/>
              )}
            </div>

          </div>
        </div>
    )};
  }
