import React , {memo} from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetMoviesListQuery } from '../../state';
import ActionCarousel from '../basic/actionCarousel';
import {getMoviesCarouselSelector} from '../../state';
import { Link } from 'react-router-dom';

const CarouselCustom = (props) => {
    const movies = useSelector(getMoviesCarouselSelector);
    const [getMovies,resultGetMovies] = useLazyGetMoviesListQuery();
    console.log('propsdata',props.genreSelected)
    useEffect(()=>{
        getMovies(props.genreSelected?.id);
    },[props])
    useEffect(()=>{
        if(resultGetMovies.isError){
            alert('cant fetch movies list')
        }
    },[resultGetMovies])
    return (
        <>
        <h2>Genre - {props.genreSelected?.name}</h2>
        <ActionCarousel>
            {
                movies &&
                movies.map(mov=>{
                    return(
                        <div key={mov?.id}>
                            <Link to={`/movie/${mov?.id}`}><img src={`https://image.tmdb.org/t/p/original/${mov?.backdrop_path}`} style={{width: '100vw', height: '500'}}/></Link>
                        </div>
                    )
                })
            }
        </ActionCarousel>
      </>
    );
  };
  

export default memo(CarouselCustom);
