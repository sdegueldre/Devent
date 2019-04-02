import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';

export default class Events extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    this.setState(await api.fetchEvents());
  }

    render() {

      const { events } = this.state;
        return (
          <div className="container-fluid">

            {events.map(events =>
              <div key={events.id} className="container">
                {events.event_title}
                {events.event_time}
                {events.event_description}
                {events.event_city}
              </div>
            )}
            {this.state.nextpage}

        </div>


        );
    }
}
