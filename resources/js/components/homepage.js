import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import api from '../api';
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
    this.setState(await api.fetchEvents());
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
            <h1><i className="fas fa-calendar my-3 pr-3"></i> Next events</h1>
            <div className="row text-center">
              <div className="col">
                <div className="card-content">
                  <div className="card-img">
                      <img src={event05} alt=""/>
                      <span className="date"><h4><i className="fas fa-calendar"></i> 29 Mai </h4></span>
                      <span className="city"><h4><i className="fas fa-map-marker-alt"></i> Liège</h4></span>
                  </div>
                  <div className="card-desc">
                      <h3>Heading</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                          voluptas totam</p>
                        <a href="#" className="btn-card">More info</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-content">
                  <div className="card-img">
                      <img src={event02} alt=""/>
                        <span className="date"><h4><i className="fas fa-calendar"></i> 29 Mai </h4></span>
                        <span className="city"><h4><i className="fas fa-map-marker-alt"></i> Liège</h4></span>
                  </div>
                  <div className="card-desc">
                      <h3>Heading</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                          voluptas totamLorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                              voluptas totamLorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                  voluptas totamLorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                      voluptas totam</p>
                        <a href="#" className="btn-card">More info</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card-content">
                  <div className="card-img">
                      <img src={event03} alt=""/>
                        <span className="date"><h4><i className="fas fa-calendar"></i> 29th Mai </h4></span>
                        <span className="city"><h4><i className="fas fa-map-marker-alt"></i> Liège</h4></span>
                  </div>
                  <div className="card-desc">
                      <h3>Heading</h3>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                          voluptas totamLorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                              voluptas totamLorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, voluptatum! Dolor quo, perspiciatis
                                  voluptas totam</p>
                        <a href="#" className="btn-card">More info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End show next events */}
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
