class API {

  constructor(){
    this.token = localStorage.getItem('token');
  }
//contact the API
  async callAPI(method, route, data = null){
    try {
      let config = {
          method: method,
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+ this.token
          },
      }
      if(data != null){
        config.body = data;
      }
      const response = await fetch('/api/' + route, config);
      if (response.ok) {
        const json = await response.json();
        return json;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

// get events
   async fetchEvents(page = 1) {
     const json = await this.callAPI('GET', 'events/?page='+page);
     return({current_page: json.current_page, events: json.data, last_page: json.last_page });
   }

   async fetchHome() {
    const json = await this.callAPI('GET', 'homepage');
    return({ events: json});
  }

  async fetchEventSolo(id) {
    const json = await this.callAPI('GET', 'events/' + id);
    return({ eventSolo: json});
  }

  async fetchPastEvents(page = 1) {
    const json = await this.callAPI('GET', 'pastevents/?page='+page);
    return({current_page: json.current_page, events: json.data, last_page: json.last_page });
  }
//add, update and delete event
   async AddEvent(data) {
     const json = await this.callAPI( 'POST', 'events', data);
     return({ message: json.message, id: json.event.id});
  }
   async editEvents(data, id) {
     const json = await this.callAPI( 'PUT', 'events/'+id, data);
     return({ message: json.message });
  }
   async deleteEvents(id) {
     const json = await this.callAPI( 'DELETE', 'events/'+id);
     return({ message: json.message });
  }
// participation to an event
  async participate(id) {
    const json = await this.callAPI( 'POST', 'attend/'+id);
    return({ message: json.message });
  }
  async unparticipate(id) {
    const json = await this.callAPI( 'DELETE', 'attend/'+id);
    return({ message: json.message });
  }

//routes users
  islogged(){
    console.log(this.token);
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      return({ loggedIn: true});
    } else {
      return({ loggedIn: false });
    }
  }
  async register(data) {
    const json = await this.callAPI( 'POST', 'register', data);
    console.log(json);
    if (json != undefined){
      return({ message: 'Successfully Registered!', redirect: 'true'});
    }
    else {
      return({ message: 'Something went wrong, try again', redirect: 'false' });
    }
  }
  async login(data) {
    const json = await this.callAPI( 'POST', 'login', data);
    this.token = json.access_token;
    localStorage.setItem('token', this.token);
    if (json != undefined){
      return({ message: 'Successfully logged in!', redirect: 'true'});
    }
    else {
      return({ message: 'Something went wrong, try again' , redirect: 'false'});
    }
  }
   async logout() {
     const json = await this.callAPI( 'POST', 'logout');
     if (json != undefined){
       this.token = null;
       localStorage.removeItem('token');
       return({ message: 'Successfully logged out!' });
     }
     else {
       return({ message: 'Something went wrong, try again' });
     }
  }
}
export default (new API());
