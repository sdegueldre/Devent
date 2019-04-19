import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

export default class EmbededVideo extends Component {
  render() {
      return (
        <iframe width="100%" src={`https://www.youtube.com/embed/${this.props.videoId}`} frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
      )
    }
}
