import { createSlice } from '@reduxjs/toolkit';
import UserService from 'client/services/user';

const userSlice = createSlice({
  name: 'user',
  initialState: { list: [] },
  reducers: {
    setUserDetail(state, action) {
      state.detail = action.payload;
    },
    setUserList(state, action) {
      state.list = action.payload;
    },
  },
});

const { setUserDetail, setUserList } = userSlice.actions;

const fetchUsers = () => async (dispatch) => {
  dispatch(setUserList(await UserService.getUsers()));
};

const fetchUser = (id) => async (dispatch) => {
  dispatch(setUserDetail(await UserService.getUser(id)));
};

const addUser = (values) => async (dispatch) => {
  await UserService.addUser(values);
  dispatch(fetchUsers());
};

const deleteUser = (id) => async (dispatch) => {
  await UserService.deleteUser(id);
  dispatch(fetchUsers());
};

export { fetchUsers, fetchUser, addUser, deleteUser };
export default userSlice.reducer;
