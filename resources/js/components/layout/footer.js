import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends Component {

    render() {
        return (
          <div className="container-fluid bg-secondary py-5">
            <div className="row">
              <div className="container navbar navbar-fixed-bottom">
                Je suis un footer
              </div>
            </div>
          </div>

        );
    }
}
