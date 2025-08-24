import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  limit: 10,
  filter: null,
  sortBy: "createdAt",
  sort: "asc",
  skip: 0,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const selectQueries = (state: RootState) => state.books;

export const { updateLimit } = booksSlice.actions;

export default booksSlice.reducer;
