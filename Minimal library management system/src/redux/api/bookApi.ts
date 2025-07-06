import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://the-archivist-server.vercel.app/api",
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    //getting all books
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    // adding a new book
    createBook: builder.mutation({
      query: (bookData) => ({
        url: "/books",
        method: "POST",
        body: bookData,
      }),
      invalidatesTags: ["book"],
    }),
    // getting single book
    getBookId: builder.query({
      query: (params) => ({
        url: `/books/${params}`,
        method: "GET",
      }),
    }),
    // deleting a book
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (params) => ({
        url: `/books/${params}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: (args) => {
        // eslint-disable-next-line prefer-const, prefer-const
        let updateData: Record<string, unknown> = {};
        Object.keys(args.updateData).forEach((key) => {
          if (
            args.updateData[key] !== undefined ||
            args.updateData[key] !== undefined
          ) {
            updateData[key] = args.updateData[key];
          }
        });
        console.log(args.id, "argfjfjs");
        return {
          url: `/books/${args.id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: ["book"],
    }),

    borrowBook: builder.mutation({
      query: (args) => {
        return {
          url: `/borrow`,
          method: "POST",
          body: args,
        };
      },
      invalidatesTags: ["book"],
    }),

    getBorrowSummary: builder.query({
      query: () => {
        return {
          url: `/borrow/`,
          method: "GET",
        };
      },
      providesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useDeleteBookMutation,
  useGetBorrowSummaryQuery,
  useGetBookIdQuery,
} = bookApi;
