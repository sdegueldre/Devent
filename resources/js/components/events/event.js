import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import {Link} from 'react-router-dom';
import Card from '../layout/card';
import '../../../sass/event.scss';
import Moment from 'react-moment';
import EmbededVideo from '../layout/embededVideo';
import EmbededOpenStreetMap from '../layout/embededOpenStreetMap';

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
      attending: false,
      isOwner: false,
      videoId: ''
    };

    this.reload = this.reload.bind(this);
    this.checkAttending = this.checkAttending.bind(this);
  }

  async reload(id = null){
    if(id)
      window.scrollTo(0, 0)
    id = id == null ? this.props.match.params.id : id;
    let state = await api.fetchEventSolo(id);

    let mediaUrl = state.eventSolo.event_image;
    if(mediaUrl.match(/^(https:\/\/)(www.)?(youtube.com|youtu.be)/)){
      const url = new URL(mediaUrl);
      state.videoId = url.searchParams.get('v');
    } else {
      state.videoId = '';
    }

    let user;
    if(api.islogged().loggedIn){
      user = await api.me();
      state.attending = false;
      for(let attendee of state.eventSolo.attendees){
        state.attending = (attendee.id == user.profile.id) || state.attending;
      }
      state.isOwner = state.eventSolo.event_author.id == user.profile.id;
    }

    console.log(state.eventSolo);
    this.setState(state);


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

  componentDidUpdate(){
    const iframe = document.querySelector('iframe');
    window.addEventListener('resize', () => iframe.height = iframe.clientWidth*9/16);
    if(iframe != null)
      iframe.height = iframe.clientWidth*9/16;
  }

  async checkAttending(e){
    let response;
    if(e.nativeEvent.target.checked){
      response = await api.participate(this.state.eventSolo.id);
      this.reload();
    } else {
      response = await api.unparticipate(this.state.eventSolo.id);
      this.reload();
    }
  }

    render() {
      const { eventSolo, events, eventSoloAuthor, eventSoloAttendees } = this.state;

      return (
        <div className="container" key={this.key}>
        <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Event</h1>
          <div className="row">
            <div className="col-lg-8 col-xs-12 mb-3">
              {(this.state.videoId == '') ?
                <div className="eventHeaderImg" style={{ backgroundImage: 'url('+eventSolo.event_image+')'}}>
                  <div className="eventTitle"><p>{eventSolo.event_title}</p></div>
                </div>
                :
                <EmbededVideo videoId={this.state.videoId}/>
              }

              <div className="eventAttending sticky-top" style={{ zIndex: '2' }}>
                <div  style={{height: '63px', marginTop: '-63px', zIndex: -1}}></div>
                <input id="toggle-7" className="toggle toggle-yes-no" type="checkbox" onChange={this.checkAttending} checked={this.state.attending ? "checked" : ""}/>
                <label htmlFor="toggle-7" data-on="Going" data-off="Not going"></label>
              </div>
              <div className="eventBody mt-3 clearfix">
                <h3><i className="far fa-clock"></i> <Moment format="DD MMMM Y - H:mm">{eventSolo.event_time}</Moment></h3>
                <div className="col">
                  <h4>Description</h4>
                    <EmbededOpenStreetMap className="map-placeholder" mapId={`event-${this.state.eventSolo.id}-map`} address={`${this.state.eventSolo.event_location} ${this.state.eventSolo.event_city}`}/>
                  <p>{eventSolo.event_description}</p>
                </div>
              </div>
              <div className="attendee">
                {(eventSoloAttendees.length<= 1) &&
                <h3 className="mt-3">{eventSoloAttendees.length} attendee</h3>
                }
                {(eventSoloAttendees.length> 1) &&
                <h3 className="mt-3">{eventSoloAttendees.length} attendees</h3>
                }
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
              {this.state.isOwner &&
              <div className="buttons">
                <div className="btn btn-danger mr-3"><a className="Edit text-white" href={"/editanevent/"+eventSolo.id}>Edit</a></div>
                <div className="btn btn-danger"><a className="Delete text-white" href={"/deleteanevent/"+eventSolo.id}>Delete</a></div>
              </div>}
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
