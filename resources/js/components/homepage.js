import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/* Demo */
import event01 from '../assets/event01.jpg';
import event02 from '../assets/event02.jpg';
import event03 from '../assets/event03.jpg';
import event05 from '../assets/event05.png';
import test from '../assets/test.jpg';


export default class Homepage extends Component {

    render() {
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
                  <img className="d-block w-100" src="https://via.placeholder.com/1920x450/6f42c1/000000" alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://via.placeholder.com/1920x450/aaaaaa/000000" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://via.placeholder.com/1920x450/22B24C/000000" alt="Third slide"/>
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
            <h1><i className="fas fa-calendar"></i> Next events</h1>
            <div className="row text-center">
              <div className="col">
                <div className="card-content">
                  <div className="card-img">
                      <img src={event05} alt=""/>
                      <span><h4><i className="fas fa-map-marker-alt"></i> Liège Hannut PoucetLiège Hannut Poucet </h4></span>
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
                      <span><h4><i className="fas fa-map-marker-alt"></i> Liège Hannut  </h4></span>
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
                      <img src={test} alt=""/>
                      <span><h4><i className="fas fa-map-marker-alt"></i> Liège   </h4></span>
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
        </div>


        );
    }
}
