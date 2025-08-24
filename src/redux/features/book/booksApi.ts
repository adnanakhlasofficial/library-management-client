import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ limit, fitler, sortBy, sort }) => {
        return { url: "/books", params: { limit, fitler, sortBy, sort } };
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
