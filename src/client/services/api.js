const doRequest = (method, url, body) => {
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

const getRequest = (url) => doRequest('GET', url);
const postRequest = (url, body) => doRequest('POST', url, body);
const deleteRequest = (url) => doRequest('DELETE', url);

export { getRequest, postRequest, deleteRequest };
