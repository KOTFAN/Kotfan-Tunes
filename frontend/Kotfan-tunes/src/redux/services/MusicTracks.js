import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const musicTracksAPI = createApi({
   reducerPath: 'musicTracksAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:8000',
      // prepareHeaders: (headers) => {
      //    headers.set('x-rapidapi-key', 'f4642f5f55msh335aede259b9186p1ddbacjsn53efd60b134b');
      //    headers.set('x-rapidapi-host', 'youtube-music-api3.p.rapidapi.com');
      //    return headers;
      //
      // }
   }),
   endpoints: (builder) => ({
      getGenres: builder.query({ query: () => '/api/genres' }),
      getTracks: builder.query({ query: () => '/api/tracks' }),
      // getSongDetails: builder.query({
      //    query: ({ songid }) => {

      //       return `/music/lyrics/plain?id=${songid}`

      //    }

      // })
   }),
});

export const {
   useGetGenresQuery,
   useGetTracksQuery,
} = musicTracksAPI