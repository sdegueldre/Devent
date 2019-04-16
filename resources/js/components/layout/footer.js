import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends Component {

    render() {
        return (
          <div className="container-fluid bg-secondary mt-2 py-3   card-footer">

            <div className="container">
              <div className="row justify-content-between">
                  <div className="h5 my-2 d-flex align-items-center"><i className="far fa-copyright mr-1"></i>2019 - Dev'Event</div>
                  <div className="text-danger h4 my-2">Pour l'assurance d'évènements réussis.</div>
              </div>
            </div>

          </div>

        );
    }
}
