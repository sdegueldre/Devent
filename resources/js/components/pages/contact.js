import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
        <div className = "container" >

          <div className = "row text-white mx-auto pb-4" >
            <h1 className = "mt-3 mb-2 text-white" > < i className = "far fa-id-card" > < /i> Contact</h1 >
          </div>

          <div className="row col-12 py-5 mx-auto">

            <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-wrap align-items-start mb-3 py-4 px-5 ">
              <h2 className = "mt-3 mb-2 text-white h3 " > < i className = "far fas fa-at" > < /i> E-mail</h2 >
              <a href="#"><p className="h4 pl-4 pb-3">devevent@gmail.com</p></a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-wrap align-items-start mb-3 py-4 px-5 mx-auto">
              <h2 className = "mt-3 mb-2 text-white h3" > < i className = "fas fa-phone-square" > < /i> Phone number</h2 >
              <p className="h4 pl-4 pb-3 text-danger">+32 456/789.123</p>
            </div>

          </div>

          <div className="row col-12 py-3 mx-auto">

            <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-wrap align-items-start mb-3 py-4 px-5 ">
              <h2 className = "mt-3 mb-2 text-white h3 " > < i className = "fab fa-linkedin-in" > < /i> LinkedIn</h2 >
              <a href="#"><p className="h4 pl-4 pb-3">linkedIn Dev'Event</p></a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 d-flex flex-wrap align-items-start mb-3 py-4 px-5 mx-auto">
              <h2 className = "mt-3 mb-2 text-white h3" > < i className = "fab fa-facebook-messenger" > < /i> Messenger</h2 >
              <a href="#"><p className="h4 pl-4 pb-3">Messenger Dev'Event</p></a>
            </div>

          </div>

          <h2 className="text-center"><i className="fa fa-envelope mr-3"></i>Send us a message</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-8 pb-5">

              <form action="mail.php" method="post">
                <div className="card border-danger rounded-0">
                  <div className="card-header p-0">
                    <div className="bg-danger text-white text-center py-2">
                      <h3 className="text-center"> Contact form</h3>
                      <p className="m-0">we answer you as soon as possible</p>
                    </div>
                  </div>
                  <div className="card-body p-3">

                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-user text-danger"></i></div>
                        </div>
                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-envelope text-danger"></i></div>
                        </div>
                        <input type="email" className="form-control" id="nombre" name="email" placeholder="example@gmail.com" required />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text"><i className="fa fa-comment text-danger"></i></div>
                        </div>
                        <textarea className="form-control" placeholder="Your message here" required></textarea>
                      </div>
                    </div>

                    <div className="text-center">
                      <input type="submit" value="Submit" className="btn btn-danger btn-block rounded-0 py-2" />
                    </div>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div >
        )
    }
}
