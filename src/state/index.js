import { configureStore } from '@reduxjs/toolkit';
import getMovies from './getMovies';
import CartManagement from '../reducer/cartManagement';

export const store = configureStore({
    reducer :{
        [getMovies.reducerPath] : getMovies.reducer,
        CartManagement : CartManagement.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        getMovies.middleware
    ),
})


export const {
    useLazyGetGenreQuery,
    useLazyGetMoviesListQuery,
    useLazyGetMoviesDetailQuery
} = getMovies

export * from './selector';