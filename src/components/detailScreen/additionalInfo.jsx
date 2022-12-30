import React , {memo} from 'react';
import {Col,Row} from 'antd';
import { useSelector } from 'react-redux';
import {getMoviesDetailSelector} from '../../state'

const AdditionalInfo = () =>{
    const data = useSelector(getMoviesDetailSelector);
    return(
        <Row>
            <Col span={24}>
                <h3>Productions Companies</h3>
            </Col>
            <Col span={24}>
                <h4>{data?.production_companies.map((comp, i) => (<>{(i ? ', ': '') + comp.name}</>))}</h4>
            </Col> 
            <Col span={24}>
            <h3>Overview</h3> 
            </Col>
            <Col span={24}>
                <h4>{data?.overview}</h4>
            </Col> 
        </Row>
    )
}

export default memo(AdditionalInfo);
