import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import Moment from 'react-moment';

export default class Card extends Component {

  render() {
      let classes = this.props.classes ? this.props.classes : 'card';
      let reload = this.props.reload ? this.props.reload : (() => 0);
      return (

        <div className={classes}>
          <div className="card-content">
            <div className="card-img">
            <Link to={"/event/" + this.props.events.id} onClick={() => reload(this.props.events.id)}>
              <img src={this.props.events.event_image} alt=""/>
            </Link>
              <span className="date"><h4><i class="far fa-clock"></i> <Moment format="DD MMM - H:mm">{this.props.events.event_time}</Moment></h4></span>
              <span className="city"><h4><i className="fas fa-map-marker-alt"></i> {this.props.events.event_city}</h4></span>
            </div>
            <div className="card-desc">
              <h3>{this.props.events.event_title}</h3>
             <TextTruncate
                    line={2}
                    truncateText="…"
                    text={this.props.events.event_description}
                    textTruncateChild={<Link to={"/event/" + this.props.events.id} onClick={() => reload(this.props.events.id)}>Read more</Link>}/>
              </div>
            </div>
              <div>
              <Link to={"/event/" + this.props.events.id} onClick={() => reload(this.props.events.id)}>
                <button type="button" className="btn-card btn-primary btn-lg btn-block"> <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Show more details<span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button>
              </Link>
              </div>
        </div>
      )
    }
}
