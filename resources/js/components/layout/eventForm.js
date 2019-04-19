import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import api from '../../api';

export default class eventForm extends Component {

  async componentDidMount() {
    window.scrollTo(0, 0) // Go to the top of the page
    const ytTab = document.querySelector('#youtube-tab');
    const imgTab = document.querySelector('#image-tab');
    ytTab.addEventListener('click', () => this.setState({media: 'video'}));
    imgTab.addEventListener('click', () => this.setState({media: 'image'}));
  }

  constructor(props) {
    super(props);
    this.state = {
      ...(props.package),
      media: 'video',
      media_modified: false,
      image_file: null,
      image_filename: 'Choose a file...'
    };
    for(let key in this.state){
      this.state[key] = this.state[key] || '';
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let obj = {};
    if(['event_video', 'event_image'].includes(event.target.name))
      obj.media_modified = true;
    if(event.target.files)
      obj.image_file = event.target.files[0];
    else
      obj[event.target.name] = event.target.value;
    console.log('input changed:', obj);
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
    console.log('submitted with state', this.state);

    let state = {...this.state};
    if(this.state.media == 'image'){
      state.event_video = '';
      const files = document.getElementById('image-input').files;
      if(files.length)
        state.event_image = await this.getBase64(files[0]);
    } else {
      state.event_image = '';
    }
    state.event_time = state.date + ' '+ state.time;
    delete state.date;
    delete state.time;
    if(!this.state.media_modified){
      delete state.event_image;
      delete state.event_video;
    }
    console.log('about to post', state);
    const response = await (this.props.submitFunction(JSON.stringify(state), this.props.id));
    alert(response.message + ' : ' + this.state.event_title);
    this.props.history.push("/event/"+ (this.props.id || response.id) + '?invite');
  }

  componentDidUpdate(prevProps){
    if(prevProps.package.event_title != this.props.package.event_title){
      let state = {
        ...this.props.package,
        media: 'video',
        media_modified: false,
        image_file: null,
        image_filename: 'Choose a file...'
      };
      for(let key in state){
        state[key] = state[key] || '';
      }
      this.setState(state);
    }
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
                      <label className="custom-file-label" htmlFor="customFile">{this.state.image_filename}</label>
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
