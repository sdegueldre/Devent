import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import api from '../api';
import {Link} from 'react-router-dom';
/* Demo */
import event01 from '../assets/event01.jpg';
import event02 from '../assets/event02.jpg';
import event03 from '../assets/event03.jpg';
import event05 from '../assets/event05.png';
import test from '../assets/test.png';

export default class Homepage extends Component {

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
      console.log("events1" + events);

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
                  <div key={events.id} className="card">
                    <div className="card-content">
                      <div className="card-img">
                        <img src={events.event_image} alt=""/>
                        <span className="date"><h4><i className="fas fa-calendar"></i> {events.event_time} </h4></span>
                        <span className="city"><h4><i className="fas fa-map-marker-alt"></i> {events.event_city}</h4></span>
                      </div>
                      <div className="card-desc">
                        <h3>{events.event_title}</h3>
                        <p>{events.event_description}</p>
                        </div>
                      </div>
                        <Link to="/event">
                          <button type="button" className="btn-card btn-primary btn-lg btn-block"> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Show more cool events <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>
                        </Link>
                  </div>
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
        </div>


        );
    }
}
