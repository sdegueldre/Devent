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
          return response
      }
    }
    catch (error) {
            console.log(error);
    }
  }

// get events
   async fetchEvents() {
    const response = await this.callAPI('GET', 'events');
    const json = await response.json();
    return({ events: json.data, nextpage: json.next_page_url });
  }

   async fetchHome() {
    const response = await this.callAPI('GET', 'homepage');
    const json = await response.json();
    return({ events: json});
  }

  async fetchEventSolo(id) {
    const response = await this.callAPI('GET', 'events/' + id);
    const json = await response.json();
    return({ events: json});
  }

//add, update and delete event
   async AddEvent(data) {
     const response = await this.callAPI( 'POST', 'events', data);
     const json = await response.json();
     return({ message: json });
  }
   async editEvents(data, id) {
     const response = await this.callAPI( 'PUT', 'events/'+id, data);
     const json = await response.json();
     return({ message: json });
  }
   async deleteEvents(id) {
     const response = await this.callAPI( 'DELETE', 'events/'+id);
     const json = await response.json();
     return({ message: json });
  }

//routes users
  async register(data) {
    const response = await this.callAPI( 'POST', 'register', data);
    const json = await response.json();
    return({message: json });
  }
  async login(data) {
    console.log(this.token);
    const response = await this.callAPI( 'POST', 'login', data);
    const json = await response.json();
    this.token = json.access_token;
    localStorage.setItem('token', this.token);
    return({ message: json });
  }
   async logout() {
     const response = await this.callAPI( 'POST', 'logout');
     const json = await response.json();
    return({ message: json });
  }
}
export default (new API());
