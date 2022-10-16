import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://634ae721d90b984a1e32b4f8.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => '/Contacts',
      providesTags: ['Contact'],
    }),
    createContacts: builder.mutation({
      query: contactNumber => ({
        url: '/Contacts',
        method: 'POST',
        body: {
          phone: contactNumber.phone,
          name: contactNumber.name,
        },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/Contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useCreateContactsMutation,
} = contactApi;