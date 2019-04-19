import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import EventForm from '../layout/eventForm';

export default class AddNewEvent extends Component {

  async componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
    const ytTab = document.querySelector('#youtube-tab');
    const imgTab = document.querySelector('#image-tab');
    ytTab.addEventListener('click', () => this.setState({event_image: ''}));
    imgTab.addEventListener('click', () => this.setState({event_video: ''}));

    let event = (await api.fetchEventSolo(this.props.match.params.id)).eventSolo
    event.date = event.event_time.substring(0,10);
    event.time = event.event_time.substring(11,21);
    delete this.state.event_time;
    this.setState(event);
  }

  constructor(props) {
    super(props);
    this.state = {
      event_title: '',
      event_time: '',
      event_description: '',
      event_city: '',
      date: '',
      time: '',
      event_location: '',
      event_image: 'Choose file...',
      event_video: '',
      image_file: {
        name: ''
      }
    };
  }

  render() {
    return (<EventForm package={this.state} submitFunction={api.editEvents.bind(api)} history={this.props.history} id={this.props.match.params.id}/>);
  }
}
