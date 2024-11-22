import { createSlice } from '@reduxjs/toolkit';

interface stateTypes {
  isLoading: boolean;
  home: null;
  auth: {
    token: string;
  };
}

const initialState: stateTypes = {
  isLoading: false,
  home: null,
  auth: {
    token: null,
  },
};

const slice = createSlice({
  name: 'reducer',
  initialState,
  reducers: {
    /* Token */
    setToken(state, action) {
      state.isLoading = true;
      console.info(action);
    },
  },
});

export const { setToken } = slice.actions;

export default slice.reducer;
