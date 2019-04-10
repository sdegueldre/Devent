import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends Component {

    render() {
        return (
          <div className="container-fluid bg-secondary mt-5 pt-5 py-5 card-footer">

            <div className="container">
              <div className="row">

                  <div className="col-sm-12 col-md-6 col-lg-6 my-auto">
                    <div>
                      <p><i className="far fa-copyright h5 pr-3 ml-5"></i> 2019 - Dev'Event</p>
                      <p className="text-danger h4 ml-5">Pour l'asurance d'évènements réussis.</p>
                    </div>
                  </div>

              </div>
            </div>

          </div>

        );
    }
}
