import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../api';
import '../../sass/event.scss';
/* Demo */
import eventimg from '../assets/event05.png';



export default class Eventsolo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

    render() {
      return (
        <div className="container">
        <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i> Event</h1>
          <div className="row">
            <div className="eventCard col-lg-10">
              <div className="eventHeader" style={{ backgroundImage: 'url('+eventimg+')' }}>
                <div className="eventTitle"><p>Title of the event super long for testing purpose</p></div>
              </div>
              <div className="eventBody">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis ipsum nec ligula ullamcorper lobortis. Donec in orci eget tellus tempus blandit eget et leo. Suspendisse vestibulum venenatis dui, eget varius libero pellentesque ut. Cras eget erat sed nisi ultrices condimentum. Nulla id vestibulum quam. Sed tristique pulvinar odio ut rhoncus. Sed eleifend vulputate metus sit amet blandit. Curabitur at bibendum purus. Aenean ultrices dui sit amet pulvinar semper.</p>
                <p>Curabitur libero urna, molestie ut libero ac, condimentum rutrum nibh. Nunc auctor massa vel rutrum varius. Duis id tincidunt lorem, vitae mollis nunc. Nam iaculis diam sit amet turpis rutrum tempus. Quisque tempor vel urna eu lobortis. Donec arcu magna, hendrerit et turpis in, tincidunt ultricies ante. Nunc consequat nisi vel lectus facilisis, vel lobortis risus facilisis. Vestibulum finibus ligula odio, blandit condimentum magna vulputate quis. Nulla facilisi. Aliquam erat volutpat. Fusce suscipit turpis eros, eu consectetur quam dapibus sit amet. Curabitur ultricies rutrum mauris eget sagittis. Donec nunc sapien, cursus a nisl et, mattis viverra arcu. Pellentesque sed eleifend nisl.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis ipsum nec ligula ullamcorper lobortis. Donec in orci eget tellus tempus blandit eget et leo. Suspendisse vestibulum venenatis dui, eget varius libero pellentesque ut. Cras eget erat sed nisi ultrices condimentum. Nulla id vestibulum quam. Sed tristique pulvinar odio ut rhoncus. Sed eleifend vulputate metus sit amet blandit. Curabitur at bibendum purus. Aenean ultrices dui sit amet pulvinar semper.</p>
                <p>Curabitur libero urna, molestie ut libero ac, condimentum rutrum nibh. Nunc auctor massa vel rutrum varius. Duis id tincidunt lorem, vitae mollis nunc. Nam iaculis diam sit amet turpis rutrum tempus. Quisque tempor vel urna eu lobortis. Donec arcu magna, hendrerit et turpis in, tincidunt ultricies ante. Nunc consequat nisi vel lectus facilisis, vel lobortis risus facilisis. Vestibulum finibus ligula odio, blandit condimentum magna vulputate quis. Nulla facilisi. Aliquam erat volutpat. Fusce suscipit turpis eros, eu consectetur quam dapibus sit amet. Curabitur ultricies rutrum mauris eget sagittis. Donec nunc sapien, cursus a nisl et, mattis viverra arcu. Pellentesque sed eleifend nisl.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis ipsum nec ligula ullamcorper lobortis. Donec in orci eget tellus tempus blandit eget et leo. Suspendisse vestibulum venenatis dui, eget varius libero pellentesque ut. Cras eget erat sed nisi ultrices condimentum. Nulla id vestibulum quam. Sed tristique pulvinar odio ut rhoncus. Sed eleifend vulputate metus sit amet blandit. Curabitur at bibendum purus. Aenean ultrices dui sit amet pulvinar semper.</p>
                <p>Curabitur libero urna, molestie ut libero ac, condimentum rutrum nibh. Nunc auctor massa vel rutrum varius. Duis id tincidunt lorem, vitae mollis nunc. Nam iaculis diam sit amet turpis rutrum tempus. Quisque tempor vel urna eu lobortis. Donec arcu magna, hendrerit et turpis in, tincidunt ultricies ante. Nunc consequat nisi vel lectus facilisis, vel lobortis risus facilisis. Vestibulum finibus ligula odio, blandit condimentum magna vulputate quis. Nulla facilisi. Aliquam erat volutpat. Fusce suscipit turpis eros, eu consectetur quam dapibus sit amet. Curabitur ultricies rutrum mauris eget sagittis. Donec nunc sapien, cursus a nisl et, mattis viverra arcu. Pellentesque sed eleifend nisl.</p>
              </div>
            </div>
          </div>
        </div>
    )};
  }
