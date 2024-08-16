import { createSlice } from "@reduxjs/toolkit";

type MoviesState = {
  isLogged: boolean;
  currentPages: number;
};

const initialState: MoviesState = {
  isLogged: false,
  currentPages: 2
};

const CarsSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPages = payload;
    }
  },
  extraReducers: (builder) => {}
});

export const { setCurrentPage } = CarsSlice.actions;

export default CarsSlice.reducer;
