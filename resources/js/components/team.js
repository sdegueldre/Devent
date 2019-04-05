import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Team extends Component {

  componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
  }

    render() {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-xs-12">
                <div style={{backgroundColor: '#555555', width:100 + '%'}}>
                  PLop
                </div>
              </div>
              <div className="col-lg-4 col-xs-12">
                <div style={{backgroundColor: '#FFFFFF', width:100 + '%'}}>
                  Coucou
                </div>
              </div>
            </div>
        </div>


        );
    }
}
