class API {
  constructor() {
    this.token = null;
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': this.token
    };
  }

  * getData(url) {
    const data = yield fetch(url, { method: 'GET', headers: API.headers })
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(err => {
        return err;
      });
    return data;
  }

  * pushData(method, url, params, success, error) {
    let data = yield fetch(url, {
      method,
      headers: this.headers,
      body: JSON.stringify(params)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json().then(json => {
            if (success !== undefined && typeof success === 'function') {
              return success(json);
            }
          });
        } else {
          return response.json().then(json => {
            if (error !== undefined && typeof error === 'function') {
              return error(json);
            }
          });
        }
      })
      .catch(err => {
        error(err);
      });

    return data;
  }

  * deleteData(url) {
    const data = yield fetch(url, {
      method: 'delete',
      headers: this.headers,
    })
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(err => {
        return err;
      });
    return data;
  }

}

export default new API();