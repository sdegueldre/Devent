import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Function for generating a random color for the background of the cards */
function random_bg_color() {
  // For really random colors
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";

   return bgColor;
  }


export default class Example extends Component {

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header" style={{background: random_bg_color() }}>Login</div>

                            <div className="card-body" style={{background: random_bg_color() }}>
                                Je serai un formulaire d'identification!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
