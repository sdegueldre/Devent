import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Link
} from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
          <div className = "container" >

            <div className = "row text-white mx-auto pb-4" >
              <h1 className = "mt-3 mb-2 text-white" > < i class = "far fa-id-card" > < /i> Contact</h1 >
            </div>

              <div className="row py-5 mx-auto">

                <div className="col-4 d-flex flex-wrap align-items-start py-5 px-5 mx-auto">
                  <h2 className = " mt-3 mb-2 text-white h3 text-danger" > < i class = "far fas fa-at" > < /i> @-Mail</h2 >
                  <p className="h4 pl-3 pb-3">devevent@gmail.com</p>
                </div>

                <div className="col-4 d-flex flex-wrap align-items-start py-5 px-5 mx-auto">
                  <h2 className = " mt-3 mb-2 text-white h3 text-danger" > < i class = "far fas fa-at" > < /i> @-Mail</h2 >
                  <p className="h4 pl-3 pb-3">devevent@gmail.com</p>
                </div>

              </div>



          </div >
        )
    }
}
