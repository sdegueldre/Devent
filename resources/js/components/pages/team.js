import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import image01 from '../../assets/avatar11.png';
import image02 from '../../assets/avatar11.png';
import image03 from '../../assets/avatar11.png';
import image04 from '../../assets/avatar11.png';
import image05 from '../../assets/avatar11.png';

export default class Team extends Component{

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

  render() {
    return(
      <div className="container">
      <div className="row mx-auto pb-4">

      <h1 className="mt-3 mb-2 text-white"><i className="fas fa-user-friends text-white"></i> Team</h1>

             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={image01} alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Dev'event</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="#" className="btn btn-danger px-4 py-3">MORE ABOUT</a>
             </article>

             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={image02} alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Dev'event</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="#" className="btn btn-danger px-4 py-3 mb-5">MORE ABOUT</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={image03} alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Dev'event</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="#" className="btn btn-danger px-4 py-3">MORE ABOUT</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={image04} alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Dev'event</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="#" className="btn btn-danger px-4 py-3 mb-5">MORE ABOUT</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={image05} alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Dev'event</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="#" className="btn btn-danger px-4 py-3 mb-5">MORE ABOUT</a>
             </article>
         </div>
      </div>
    )
  }
}
