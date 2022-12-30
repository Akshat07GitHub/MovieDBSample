import React from 'react';
import { PageHeader } from 'antd'
import {ShoppingCartOutlined} from '@ant-design/icons'; 
import { Badge } from 'antd';
import { useSelector } from 'react-redux';


const HeaderComponent = () => {
  const state = useSelector(s=>s);
  const cart = state.CartManagement.cart.length || 0
  return(
    <PageHeader
    className=""
    ghost={false}
    backIcon={false}
    title="Movies TMDB Details"
    extra={<Badge count={cart}><ShoppingCartOutlined style={{ fontSize: '50', cursor: "pointer"}} /></Badge>}
  />
  ) 
}
     


export default HeaderComponent;
