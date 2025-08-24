import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./features/book/booksApi";
import { booksSlice } from "./features/book/booksSlice";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    books: booksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
