const APIurl = 'http://localhost:8000/api/';


class API {

   async fetchEvents() {
    const response = await fetch(APIurl + 'events');
    //console.log(await response.json());
    const json = await response.json();
    console.log(json);
    // console.log("data", data);
    return({ events: json.data, nextpage: json.next_page_url });
  }

   async fetchHome() {
    const response = await fetch(APIurl + 'homepage');
    //console.log(await response.json());
    const json = await response.json();
    console.log(json);
    // console.log("data", data);
    return({ events: json});
  }





   async AddEvent(data) {
        try {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        }
        const response = await fetch(APIurl + 'homepage', config)
        //const json = await response.json()
        if (response.ok) {
            //return json
            return response
        } else {
            //
        }
    } catch (error) {
            //
    }

  }

   async editEvents() {

  }

   async deleteEvents() {

  }





   async register(data) {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }
    const response = await fetch(APIurl + 'register', config);
    const json = await response.json();
    console.log(json);
    return({ message: 'success' });
  }

   async login(data) {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }
    const response = await fetch(APIurl + 'login', config);
    const json = await response.json();
    console.log(json.access_token);
    return({ message: 'success' });
  }

   async logout() {
    const config = {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU1NDI4NjYwMywiZXhwIjoxNTU0MjkwMjAzLCJuYmYiOjE1NTQyODY2MDMsImp0aSI6Ik1MRVZYTTBLZ2JUakozVXgiLCJzdWIiOjE0LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.uCtPwIhRtx6ESLWj20MaQmwRqbpi5NR9R05wo1cxAG4',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
    const response = await fetch(APIurl + 'logout', config);
    const json = await response.json();
    console.log(json);
    return({ message: 'success' });
  }
}
export default (new API());
