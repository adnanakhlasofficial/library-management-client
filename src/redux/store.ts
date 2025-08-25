import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./features/book/booksApi";
import { booksSlice } from "./features/book/booksSlice";
import { borrowApi } from "./features/borrow/borrowApi";

const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    books: booksSlice.reducer,
    [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, borrowApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
