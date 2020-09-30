import express from 'express';

const api = express.Router();

let users = [
  { id: 1, emailAddress: 'admin@test.com', username: 'admin' },
  { id: 2, emailAddress: 'user@test.com', username: 'user' },
];
let count = users.length;

api.get('/users', (request, response) => {
  response.send({ users });
});

api.post('/users', (request, response) => {
  const { username, emailAddress } = request.body;
  const user = { id: ++count, username, emailAddress };
  users.push(user);
  response.send({ user });
});

api.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  users = users.filter((user) => user.id !== Number(id));
  response.sendStatus(200);
});

export default api;
