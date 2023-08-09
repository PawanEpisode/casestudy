import { createSlice } from "@reduxjs/toolkit";
import { filterInPlace } from "../Helper";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...updatedData };
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const toDelete = new Set([id]);
      filterInPlace(state, obj => !toDelete.has(obj.id));
    },
  },
});

export const { setUsers, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
