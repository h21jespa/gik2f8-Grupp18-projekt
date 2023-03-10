
class Api {
  url = '';

  constructor(url) {
    this.url = url;
  }

  create(data) {
    const JSONData = JSON.stringify(data);
    console.log(`Sending ${JSONData} to ${this.url}`);

    const request = new Request(this.url, {
      method: 'POST',
      body: JSONData,
      headers: {
        'content-type': 'application/json'
      }
    });


    return (
      fetch(request)
        .then((result) => result.json())
        .then((data) => data)
        .catch((err) => console.log(err))
    );
  }

  
  getAll() {
    return fetch(this.url)
      .then((result) => result.json())
      .then((data) => data)
      .catch((err) => console.log(err));
  }

  remove(id) {
   

    console.log(`Removing movie with id ${id}`);

    
    return fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    })
      .then((result) => result)
      .catch((err) => console.log(err));
  }

  update(data){
    console.log(`Updating movie with id ${data.id}`);

    const JSONData = JSON.stringify(data);
    const request = new Request(this.url, {
      method: 'PATCH',
      body: JSONData,
      headers: {
        'content-type': 'application/json'
      }
    });

    return fetch(`${this.url}/${JSONData}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((result) => result)
      .catch((err) => console.log(err));
  }
}
