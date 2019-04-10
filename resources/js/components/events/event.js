import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import {Link} from 'react-router-dom';
import Card from '../layout/card';
import '../../../sass/event.scss';
/* Demo purpose only */
import attendee01 from '../../assets/avatar07.png';
import attendee02 from '../../assets/avatar08.png';
import attendee03 from '../../assets/avatar09.png';
import attendee04 from '../../assets/avatar10.png';
import attendee05 from '../../assets/avatar11.png';
import attendee06 from '../../assets/avatar12.png';
import attendee07 from '../../assets/avatar13.png';
import author from '../../assets/avatar03.png';
import map from '../../assets/map.png';


export default class Eventsolo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      eventSolo: [],
      eventSoloAuthor: [],
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
      const { eventSolo, events, eventSoloAuthor } = this.state;

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
                <div className="col">
                  <h4>Description</h4>
                    <div className="map-placeholder">
                      <img className="map-img" src={map}/>
                    </div>
                  <p>{eventSolo.event_description}</p>
                </div>
              </div>
              <div className="attendee">
                <h3 className="mt-3">7 attendees</h3>
                  <div className="attendee-list">
                    <img src={attendee01}/><img src={attendee02}/><img src={attendee03}/><img src={attendee04}/><img src={attendee05}/><img src={attendee06}/><img src={attendee07}/>
                  </div>
              </div>
              <div className="buttons">
                <div className="btn btn-primary px-3 py-2 mr-4"><a className="Delete text-white" href={"/deleteanevent/"+eventSolo.id}>Delete</a></div>
                <div className="btn btn-success px-4 py-2 ml-4"><a className="Edit text-white" href={"/editanevent/"+eventSolo.id}>Edit</a></div>
              </div>
              <div className="author">
                <img src={author}/>
                <p>This event was created by {eventSoloAuthor.name} on the {eventSolo.created_at}</p>
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
