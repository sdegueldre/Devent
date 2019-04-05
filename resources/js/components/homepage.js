import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import api from '../api';
import {Link} from 'react-router-dom';
import Card from './card';
import '../../sass/cards.scss';
/* Demo */
import event02 from '../assets/event02.jpg';
import event03 from '../assets/event03.jpg';
import event05 from '../assets/event05.png';

export default class Homepage extends Component {

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
    this.setState(await api.fetchHome());
  }
  componentDidUpdate(){

  }


    render() {
      const { events } = this.state;

        return (
          <div className="container-fluid">
            {/* Start Slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 imageSlider" src={event05} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 imageSlider" src={event02}  alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 imageSlider" src={event03}  alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
          </div>
          {/* End Slider */
          /* Start show next events */}
          <div className="container">
            <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Next events</h1>
            <div className="row text-center">
              <div className="card-deck">
              {events.map(events =>
                  <Card key={events.id} events={events} />
                )}
              </div>
            </div>
          </div>
          {/* End show next events */}
          <div className="container my-4">
            <Link to="/events">
              <button type="button" className="btn-card btn-primary btn-lg btn-block">Show more cool events</button>
            </Link>
          </div>
        <div className="container my-4">
          <Link to="/addnewevent">
            <button type="button" className="btn-card btn-light btn-lg btn-block">Add a new event</button>
          </Link>
        </div>
      </div>


        );
    }
}
