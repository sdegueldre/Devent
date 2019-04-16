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
    return (<EventForm package={this.state} submitFunction={api.addEvent.bind(api)} history={this.props.history}/>);
  }
}
