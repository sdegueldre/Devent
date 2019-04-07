/* className="col-lg-4 col-md-6 col-xs-12 mb-5 mt-2"*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import {Link} from 'react-router-dom';
import Card from '../layout/card';
import '../../../sass/cards.scss';
/* Demo */
import event05 from '../../assets/event05.png';


export default class Events extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

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
          <div className="container">
            <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Events</h1>
              <div className="row text-center">
                <div className="card-deck">
                {events.map((events, index) =>
                  index < 3 ?
                    <Card key={events.id} events={events} classes="card mb-3"/> : ''
                )}
                </div>
                <div className="card-deck">
                {events.map((events, index) =>
                  index >= 3 ?
                    <Card key={events.id} events={events} classes="card"/> : ''
                )}
                </div>
              </div>

            {/* Start pagination */}
            <div className="container">
              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-end">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* End pagination */}
        </div>
        );
    }
}
