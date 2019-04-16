import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';
/* Demo */
import event05 from '../../assets/event05.png';


export default class AddNewEvent extends Component {

  async componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
    const ytTab = document.querySelector('#youtube-tab');
    const imgTab = document.querySelector('#image-tab');
    ytTab.addEventListener('click', () => this.setState({event_image: ''}));
    imgTab.addEventListener('click', () => this.setState({event_video: ''}));

    let event = (await api.fetchEventSolo(this.props.match.params.id)).eventSolo
    event.date = event.event_time.substring(0,10);
    event.time = event.event_time.substring(11,21);
    delete this.state.event_time;
    this.setState(event);
  }

  constructor(props) {
    super(props);
    this.state = {
      event_title: '',
      event_time: '',
      event_description: '',
      event_city: '',
      date: '',
      time: '',
      event_location: '',
      event_image: 'Choose file...',
      event_video: '',
      image_file: {
        name: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let obj = {};
    if(event.target.files)
      obj.event_image = event.target.files[0];
    else
      obj[event.target.name] = event.target.value;
    return this.setState(obj);
  }

  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const files = document.getElementById('image-input').files;
    let img = '';
    if(files.length)
      img = await this.getBase64(files[0]);

    this.state.event_time = this.state.date + ' '+ this.state.time;
    delete this.state.date;
    delete this.state.time;
    delete this.state.event_image;
    const data = JSON.stringify({...this.state, event_image: img});
    const response = await (api.editEvents(data, this.props.match.params.id));
    alert(response.message + ' : ' + this.state.event_title);
    this.props.history.push("/event/"+ this.props.match.params.id);
  }

  render() {
    return (

      <div className="container">
        <div>
          <h1 className="mt-3 mb-2"><i className="far fa-calendar-alt pr-3"></i>Add a new event</h1>
        </div>

        <form onSubmit={this.handleSubmit}>

            <div className="col-sm-10 col-md-8 col-lg-6 d-flex flex-wrap align-items-start mx-auto">

              <div className="form-group col-md-12 d-flex flex-wrap align-items-start pt-3">
                <label className="text-danger h4" htmlFor="title">Title</label>
                <input type="text" className="form-control" name="event_title" placeholder="event title" value={this.state.event_title} onChange={this.handleChange} />
              </div>

              <div className="form-group col-md-12 d-flex flex-wrap align-items-start pt-3">
                <label className="text-danger h4" htmlFor="description">Description</label>
                <textarea className="form-control" name="event_description" rows="3" value={this.state.event_description} onChange={this.handleChange} ></textarea>
              </div>

              <div className="form-group col-md-6 d-flex flex-wrap align-items-start">
                <label className="text-danger h4" htmlFor="date">Date</label>
                <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.handleChange} />
              </div>

              <div className="form-group col-md-6 d-flex flex-wrap align-items-start">
                <label className="text-danger h4" htmlFor="time">Hour</label>
                <input type="time" className="form-control" name="time" value={this.state.time} onChange={this.handleChange} />
              </div>

              <div className="form-group col-md-6 d-flex flex-wrap align-items-start">
                <label className="text-danger h4" htmlFor="city">City</label>
                <input type="text" className="form-control" name="event_city" placeholder="City name" value={this.state.event_city} onChange={this.handleChange} />
              </div>

              <div className="form-group col-md-6 d-flex flex-wrap align-items-start">
                <label className="text-danger h4" htmlFor="adress">Adress</label>
                <input type="text" className="form-control" name="event_location" placeholder="Exact adress" value={this.state.event_location} onChange={this.handleChange} />
              </div>

              <div className="form-group col-md-12 d-flex flex-wrap align-items-start">
                <ul className="nav nav-tabs w-100" id="myTab" role="tablist">
                  <li className="nav-item flex-grow-1">
                    <a className="nav-link active text-center" id="youtube-tab" data-toggle="tab" href="#youtube" role="tab" aria-controls="youtube" aria-selected="true">
                      <label style={{cursor: 'pointer'}} className="text-danger h4 my-1" htmlFor="image">Youtube URL</label>
                    </a>
                  </li>
                  <li className="nav-item flex-grow-1">
                    <a className="nav-link text-center" id="image-tab" data-toggle="tab" href="#image" role="tab" aria-controls="image" aria-selected="false">
                      <label style={{cursor: 'pointer'}} className="text-danger h4 my-1" htmlFor="image">Upload image</label>
                    </a>
                  </li>
                </ul>
                <div className="tab-content w-100 pt-2" id="myTabContent">
                  <div className="tab-pane fade show active" id="youtube" role="tabpanel">
                    <input type="text" className="form-control" name="event_video" placeholder="Enter URL here..." value={this.state.event_video} onChange={this.handleChange} />
                  </div>
                  <div className="tab-pane fade" id="image" role="tabpanel">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="image-input" name="event_image" files={this.state.image_file} onChange={this.handleChange}></input>
                      <label className="custom-file-label" htmlFor="customFile">{this.state.image_file.name}</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 d-flex flex-wrap align-items-start">
                <input type="submit" className="btn btn-danger px-5 py-2 mb-5 mt-3" value="Submit" />
              </div>

            </div>

        </form>

      </div>
    );
  }
}
