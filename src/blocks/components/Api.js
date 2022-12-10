export class Api {
    constructor(options) {
        this.url = options.url;
        this._headers = options.headers;
    }
    _checkResponseError = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getListCities() {
        return fetch(`${this.url}`, {
            method: 'POST',
            headers: this._headers,
        })
            .then(this._checkResponseError);
    }
    getAllPromise() {
      return Promise.all([this.getListCities()]);
    }
}
