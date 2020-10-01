import express from 'express';

const api = express.Router();

let users = [
  { id: 1, emailAddress: 'admin@test.com', username: 'admin' },
  { id: 2, emailAddress: 'user@test.com', username: 'user' },
];
let userCount = users.length;

let projects = [
  { id: 1, name: 'Test Project' },
  { id: 2, name: 'Another Project' },
];
let projectCount = projects.length;

api.get('/users', (request, response) => {
  response.send({ users });
});

api.post('/users', (request, response) => {
  const { username, emailAddress } = request.body;
  const user = { id: ++userCount, username, emailAddress };
  users.push(user);
  response.send({ user });
});

api.get('/users/:id', (request, response) => {
  const { id } = request.params;
  const user = users.find((user) => user.id === Number(id));
  response.send({ user });
});

api.delete('/users/:id', (request, response) => {
  const { id } = request.params;
  users = users.filter((user) => user.id !== Number(id));
  response.sendStatus(200);
});

api.get('/projects', (request, response) => {
  response.send({ projects });
});

api.get('/projects/:id', (request, response) => {
  const { id } = request.params;
  const project = projects.find((project) => project.id === Number(id));
  response.send({ project });
});

api.post('/projects', (request, response) => {
  const { name } = request.body;
  const project = { id: ++projectCount, name };
  projects.push(project);
  response.send({ project });
});

api.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  projects = projects.filter((project) => project.id !== Number(id));
  response.sendStatus(200);
});

export default api;
