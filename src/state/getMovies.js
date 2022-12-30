import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configGetApikey } from '../lib/config';

export const getMovies = createApi({
  reducerPath: 'getMovies',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`,
  }),
  endpoints: builder => ({
    getGenre : builder.query({
      query: () => ({
        url: `/genre/movie/list?api_key=${configGetApikey()}&language=en-US`,
        method: 'GET',
      }),
    }),
    getMoviesList: builder.query({
      query: (id) => ({
        url: `/discover/movie?api_key=${configGetApikey()}&language=en-US&with_genres=${id}`,
        method: 'GET',
      }),
    }),
    getMoviesDetail: builder.query({
      query: (movie_id) => ({
        url: `/movie/${movie_id}?api_key=${configGetApikey()}&language=en-US`,
        method: 'GET',
        keepUnusedDataFor:0
      }),
    }),
  }),
});
export default getMovies;
