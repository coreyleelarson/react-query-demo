import { createSlice } from '@reduxjs/toolkit';
import * as TodoService from 'client/services/todo';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { list: [] },
  reducers: {
    setTodoList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setTodoList } = todoSlice.actions;

const addTodo = (values) => async (dispatch) => {
  await TodoService.addTodo(values);
  dispatch(fetchTodos());
};

const deleteTodo = (id) => async (dispatch) => {
  await TodoService.deleteTodo(id);
  dispatch(fetchTodos());
};

const fetchTodos = () => async (dispatch) => {
  dispatch(setTodoList(await TodoService.getTodos()));
};

const updateTodo = (id, values) => async (dispatch) => {
  await TodoService.updateTodo(id, values);
  dispatch(fetchTodos());
};

export const actions = { addTodo, deleteTodo, fetchTodos, updateTodo };
export default todoSlice.reducer;
