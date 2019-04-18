import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
import {Link} from 'react-router-dom';
import Card from '../layout/card';
import '../../../sass/cards.scss';
/* Demo */
import event05 from '../../assets/event05.png';
import backToTheFuture from '../../assets/backtothefuture.png';


export default class PastEvents extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current_page: 1,
      events: [],
      last_page: 1,
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
              <div className="card-deck w-100 mx-auto">
                {events.map((events, index) => (
                  <Card key={events.id} events={events} classes="card mb-3"/>
                ))}
              </div>
            </div>
            <div className="container d-flex justify-content-between">
              <a className="past text-white btn btn-danger" href={"/events/page=1"}><img style={{height: '3em'}} src={backToTheFuture}/></a>
              <nav aria-label="Page navigation example">
                <ul className="pagination d-flex justify-content-end mb-0">
                  {parseInt(this.state.current_page) > 1 &&
                    <li className="page-item">
                      <a className="page-link" href={"/pastevents/page="+(parseInt(this.state.current_page)-1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                  }
                  {parseInt(this.state.current_page) > 1 &&
                    <li className="page-item"><a className="page-link" href={"/pastevents/page="+(parseInt(this.state.current_page)-1)}>{parseInt(this.state.current_page)-1}</a></li>
                  }
                  <li className="page-item"><a className="page-link page-link-active" href={"/pastevents/page="+(parseInt(this.state.current_page))}>{parseInt(this.state.current_page)}</a></li>
                  {parseInt(this.state.current_page) < this.state.last_page &&
                    <li className="page-item"><a className="page-link"href={"/pastevents/page="+(parseInt(this.state.current_page)+1)}>{parseInt(this.state.current_page)+1}</a></li>
                  }
                  {parseInt(this.state.current_page) < this.state.last_page &&
                    <li className="page-item">
                      <a className="page-link" href={"/pastevents/page="+(parseInt(this.state.current_page)+1)} aria-label="Next">
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
