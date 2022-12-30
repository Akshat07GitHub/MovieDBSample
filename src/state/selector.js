import { createSelector } from '@reduxjs/toolkit';

export const selectQuery = (s) => s?.getMovies?.queries;

export const getGenreSelector = createSelector(
    selectQuery,
    (query) => {
        console.log(query)
        if (query) {
            console.log(Object.values(query))
        const genreResults = Object.values(query)?.find(
            val => val?.endpointName === 'getGenre',
        );
        console.log(genreResults)
        if (genreResults && genreResults.data){                
                return genreResults.data.genres;                
            }
            else{
                return null;
            }
        }
        return null;
    }
);
export const getMoviesCarouselSelector = createSelector(
    selectQuery,
    (query) => {
        console.log(query)
        if (query) {
            console.log(Object.values(query))
        const genreResults = Object.values(query)?.find(
            val => val?.endpointName === 'getMoviesList',
        );
        console.log(genreResults)
        if (genreResults && genreResults.data){                
                return genreResults.data.results;                
            }
            else{
                return null;
            }
        }
        return null;
    }
);
export const getMoviesDetailSelector = createSelector(
    selectQuery,
    (query) => {
        console.log(query)
        if (query) {
        const movieData = Object.values(query)?.find(
            val => val?.endpointName === 'getMoviesDetail',
        );
        console.log(movieData)
        if (movieData && movieData.data){               
                return movieData.data;                
            }
            else{
                return null;
            }
        }
        return null;
    }
);
