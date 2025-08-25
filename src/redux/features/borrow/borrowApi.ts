import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/borrow`,
  }),
  tagTypes: ["borrows"],
  endpoints: (builder) => ({
    getBorrowBooks: builder.query({
      query: () => "/",
      providesTags: ["borrows"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/",
        method: "POST",
        body: borrowData,
      }),
    }),
  }),
});

export const { useGetBorrowBooksQuery, useBorrowBookMutation } = borrowApi;
