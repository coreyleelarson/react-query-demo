import express from 'express';

const api = express.Router();

let todos = [
  { id: 1, description: 'Take out the trash', isCompleted: true },
  { id: 2, description: 'Do the dishes', isCompleted: false },
];
let todoCount = todos.length;

api.get('/todos', (request, response) => {
  response.send({ todos });
});

api.post('/todos', (request, response) => {
  const { description } = request.body;
  const todo = { id: ++todoCount, description, isCompleted: false };
  todos.push(todo);
  response.send({ todo });
});

api.post('/todos/:id', (request, response) => {
  const { isCompleted } = request.body;
  const { id } = request.params;
  const todo = todos.find((todo) => todo.id === Number(id));
  todo.isCompleted = isCompleted;
  response.send({ todo });
});

api.delete('/todos/:id', (request, response) => {
  const { id } = request.params;
  todos = todos.filter((todo) => todo.id !== Number(id));
  response.sendStatus(200);
});

export default api;
