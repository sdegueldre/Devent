const APIurl = 'http://localhost:8000/api/';


export default class API {
  static async fetchEvents() {
    const response = await fetch(APIurl + 'events');
    //console.log(await response.json());
    const json = await response.json();
    console.log(json);
    // console.log("data", data);
    return({ events: json.data, nextpage: json.next_page_url });
  }

  static async fetchHome() {
    const response = await fetch(APIurl + 'homepage');
    //console.log(await response.json());
    const json = await response.json();
    console.log(json);
    // console.log("data", data);
    return({ events: json });
  }

  static async editEvents() {

  }
}
