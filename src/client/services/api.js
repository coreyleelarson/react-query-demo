class ApiService {
  static doRequest = (method, url, body) => {
    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      ...(body && method === 'POST' ? { body: JSON.stringify(body) } : {}),
    }).then((response) => {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    });
  };

  static getRequest = (url) => this.doRequest('GET', url);
  static postRequest = (url, body) => this.doRequest('POST', url, body);
  static deleteRequest = (url) => this.doRequest('DELETE', url);
}

export default ApiService;
