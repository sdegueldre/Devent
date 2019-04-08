import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';
/* Demo */
import event05 from '../assets/event05.png';


export default class PastEvents extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current_page: '',
      events: [],
      last_page: '',
    };
  }

  async componentDidMount() {
    this.setState(await api.fetchPastEvents(this.props.match.params.page));
  }

    render() {

      const { events } = this.state;
        return (
          <div className="container">
            <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Events</h1>
              <div className="row text-center">
                <div className="card-deck">
                {events.map(events =>
                    <div key={events.id} className="col-lg-4 col-md-6 col-xs-12 mb-5 mt-2">
                      <div className="card-content">
                        <div className="card-img">
                          <img src={events.event_image} alt=""/>
                          <span className="date"><h4><i className="fas fa-calendar"></i> {events.event_time} </h4></span>
                          <span className="city"><h4><i className="fas fa-map-marker-alt"></i> {events.event_city}</h4></span>
                        </div>
                        <div className="card-desc">
                          <h3>{events.event_title}</h3>
                          <p>{events.event_description}</p>
                        </div>
                      </div>
                      <button type="button" className="btn-card btn-primary btn-lg btn-block">Show more cool events</button>
                  </div>
                )}
                </div>
              </div>

            {/* Start pagination */}
            <div className="container">
              <nav aria-label="Page navigation example">
              <div className="btn btn-primary"><a className="past" href={"/events/page=1"}>Back to the Future</a></div>
                <ul className="pagination d-flex justify-content-end">
                  {this.state.current_page > 1 &&
                    <li className="page-item">
                      <a className="page-link" href={"/pastevents/page="+(this.state.current_page-1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                  }
                  {this.state.current_page > 1 &&
                    <li className="page-item"><a className="page-link" href={"/pastevents/page="+(this.state.current_page-1)}>{this.state.current_page-1}</a></li>
                  }
                  <li className="page-item"><a className="page-link page-link-active" href={"/pastevents/page="+(this.state.current_page)}>{this.state.current_page}</a></li>
                  {this.state.current_page < this.state.last_page &&
                    <li className="page-item"><a className="page-link"href={"/pastevents/page="+(this.state.current_page+1)}>{this.state.current_page+1}</a></li>
                  }
                  {this.state.current_page < this.state.last_page &&
                    <li className="page-item">
                      <a className="page-link" href={"/pastevents/page="+(this.state.current_page+1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  }
                </ul>
              </nav>
            </div>
            {/* End pagination */}

        </div>







        );
    }
}
