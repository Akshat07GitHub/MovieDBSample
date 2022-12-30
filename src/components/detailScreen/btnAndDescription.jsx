import React , {memo} from 'react';
import {Row,Col, Button,Rate} from 'antd';
import { useSelector,useDispatch} from 'react-redux';
import {getMoviesDetailSelector} from '../../state';
import { addToCart } from '../../reducer/cartManagement';

const BtnAndDescription = () =>{
    const data = useSelector(getMoviesDetailSelector);
    const dispatch=useDispatch();
    const state = useSelector(s=>s);
    const alredyInCart = state?.CartManagement?.cart.some((cart)=>cart.id === data?.id)
    const addToCartOnButton =()=>{
        console.log('add to cart')
        dispatch(addToCart({originalTitle:data?.original_title,id:data?.id}))
    }
    let button;
    if (alredyInCart) {
        button = <Button type="primary" style={{width:'100%', marginBottom:'10'}}>Already In Cart</Button>
        
      } else {
        button = <Button type="primary" style={{width:'100%', marginBottom:'10'}} onClick={addToCartOnButton}>Add to Cart</Button>
      }
    return(
        
        <Col span={12}>
            <Row>
            <Col span={4}>
                <h2>Original Title -</h2>
            </Col>
            <Col span={12}>
                <h2>{data?.original_title}</h2>
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Release Date -</h3>  
            </Col>
            <Col span={10}>
                <h3>{data?.release_date}</h3>  
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Rating -</h3>
            </Col>
            <Col span={10}>
                <h3><Rate allowHalf disabled={true} value={data?.vote_average/2} /></h3>
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Langauge - </h3>
            </Col>
            <Col span={10}>
                <h3>{data?.original_language}</h3>
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Category 18+ -</h3>
            </Col>
            <Col span={10}>
                <h3>{data?.adult.toString()}</h3>
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Genre -</h3>
            </Col>
            <Col span={10}>
                <h3>{data?.genres.map((g, i) => (<>{(i ? ', ': '') + g.name}</>))}</h3>
            </Col>
            </Row>
            <Row>
            <Col span={4}>
                <h3>Movie Tagline -</h3>
            </Col>
            <Col span={10}>
                <h3>{data?.tagline}</h3>
            </Col>
            </Row>
            <Row>
            <Col span={14}>
                {button}
            </Col>
            <Col span={14}>
            <Button type="info" style={{width:'100%'}} href={data?.homePage} target="_blank">
                  Visit Website
            </Button>
            </Col>
            </Row>
        </Col>
    )
}

export default memo(BtnAndDescription);