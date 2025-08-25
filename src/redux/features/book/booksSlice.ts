import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pagination: {
    limit: 10,
    filter: null,
    sortBy: "createdAt",
    sort: "asc",
    skip: 0,
  },
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    updateSkip: (state, action: PayloadAction<number>) => {
      state.pagination.skip = action.payload;
    },
  },
});

export const selectQueries = (state: RootState) => state.books.pagination;

export const { updateSkip } = booksSlice.actions;

export default booksSlice.reducer;
