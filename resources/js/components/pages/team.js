import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

import nadine from '../../assets/nadine.jpeg';
import jerem from '../../assets/jerem.jpeg';
import simon from '../../assets/simon.jpeg';
import nabil from '../../assets/nabil.jpeg';
import chris from '../../assets/chris.jpeg';
import joe from '../../assets/joe.jpeg';
import alex from '../../assets/alex.jpeg';
import sam from '../../assets/sam.jpeg';
import oda from '../../assets/oda.png';

export default class Team extends Component{

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

  render() {
    return(
      <div className="container">
      <h1 className="mt-3 mb-2 text-white"><i className="fas fa-user-friends text-white"></i> Team</h1>

      <div className="row mx-auto pb-4">
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={nadine} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Nadine</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/NadTr" target="_blank" className=" btn btn-danger px-4 py-3">GitHub Account</a>
             </article>

             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={jerem} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Jeremy</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/scalajeremy" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={simon} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Simon</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/Sim-frpt" target="_blank" className="btn btn-danger px-4 py-3">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={nabil} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Nabil</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/nabil-e" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={chris} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Christophe</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/nabil-e" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={oda} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Jonathan</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Y'avait pas sa vraie photo sur github car cet homme est plutôt mystérieux.</p>
                 </div>
                 <a href="https://github.com/joe-michel" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={sam} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Samuel</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/joe-michel" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={alex} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Alexandre</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">Eget mattis at, laoreet vel amet sed velit aliquam diam ante,
                         dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                 </div>
                 <a href="https://github.com/joe-michel" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
             <article className="col-12 col-md-4 text-center pt-5">
                 <header>
                     <img src={joe} className="teamImg" alt="phot team" />
                     <h1 className="h4 text-center text-danger pt-4 pb-2">Joé</h1>
                 </header>

                 <div className="text-white mx-auto pb-4">
                     <p className="text-center text-white px-4">L'homme beau gosse et compétent de l'équipe. La légende prétend que Bill Gates le considère comme un génie,
                        ce dernier n'a pas encore confirmé l'information mais vu son talent on a envie d'y croire.</p>
                 </div>
                 <a href="https://github.com/joe-michel" target="_blank"className="btn btn-danger px-4 py-3 mb-5">GitHub Account</a>
             </article>
         </div>
      </div>
    )
  }
}
