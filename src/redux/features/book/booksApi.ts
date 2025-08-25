import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_URL}/books`,
  }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ limit, fitler, sortBy, sort, skip }) => {
        return { url: "/", params: { limit, fitler, sortBy, sort, skip } };
      },
      providesTags: ["books"],
    }),
    getCountBooks: builder.query({
      query: () => "/count",
    }),
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/",
        method: "POST",
        body: bookData,
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetCountBooksQuery,
  useCreateBookMutation,
} = booksApi;
