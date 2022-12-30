import React,{memo} from 'react';
import CarouselCustom from './carousel';
import { useLazyGetGenreQuery } from '../../state';
import { useEffect } from 'react';
import { getGenreSelector } from '../../state';
import { useSelector } from 'react-redux';


const IndexPage = () =>{
    const [getGenre,result] = useLazyGetGenreQuery();
    const genreData = useSelector(getGenreSelector);
    console.log('selector data',genreData)
    useEffect(()=>{
        getGenre();
    },[])
    useEffect(()=>{
        if(result.isError){
            alert("error aara h yaar")
        }
    },[result])
    return (
        <>
        {
            genreData &&
            <>
                <CarouselCustom genreSelected={genreData[0]}/>
            </>
        }
        </>
    )

}

export default memo(IndexPage)