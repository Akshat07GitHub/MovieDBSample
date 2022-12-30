import React,{memo, useEffect} from 'react';
import {Row} from 'antd';
import AdditionalInfo from './additionalInfo';
import BtnAndDescription from './btnAndDescription';
import ImageArea from './imageArea';
import { useLazyGetMoviesDetailQuery } from '../../state';
import { useParams } from 'react-router-dom'

const IndexPage = () =>{
    const [getDetail,resultGetDetail] = useLazyGetMoviesDetailQuery();
    const { id } = useParams()
    useEffect(()=>{
        getDetail(id)
    },[id])
    useEffect(()=>{
        if(resultGetDetail.isError){
            alert('cant fetch movies list')
        }
    },[resultGetDetail])
    if(!resultGetDetail.isFetching){
        return (
            <>
            <Row>
                <ImageArea/>
                <BtnAndDescription/> 
            </Row>
            <Row>
                <AdditionalInfo/>
            </Row>
            </>
        )
    }else{
        return null
    }
}

export default memo(IndexPage)