import { createSlice } from '@reduxjs/toolkit';



const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: '',
    gender: '',
  },
  
  reducers: {
    updateUser: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
