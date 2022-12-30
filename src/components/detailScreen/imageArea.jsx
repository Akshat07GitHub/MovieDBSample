import React , {memo} from 'react';
import {Col,Row} from 'antd'
import { useSelector } from 'react-redux';
import {getMoviesDetailSelector} from '../../state'


const ImageArea = () =>{
    const data = useSelector(getMoviesDetailSelector);
    return(
        <Col span={10} style={{marginRight : '12'}}>
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} style={{width: '100%', height: '100%'}}/>
        </Col>
     
    )
}

export default memo(ImageArea);