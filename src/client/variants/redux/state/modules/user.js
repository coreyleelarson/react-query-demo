import { createSlice } from '@reduxjs/toolkit';
import UserService from 'client/services/user';

const userSlice = createSlice({
  name: 'user',
  initialState: { list: [] },
  reducers: {
    setUserList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setUserList } = userSlice.actions;

export const fetchUsers = () => async (dispatch) => {
  dispatch(setUserList(await UserService.getUsers()));
};

export const addUser = (values) => async (dispatch) => {
  await UserService.addUser(values);
  dispatch(fetchUsers());
};

export const deleteUser = (id) => async (dispatch) => {
  await UserService.deleteUser(id);
  dispatch(fetchUsers());
};

export default userSlice.reducer;
