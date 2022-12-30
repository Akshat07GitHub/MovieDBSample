import React , {memo} from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
  
const ActionCarousel = ({children}) => {  
    return (
      <Carousel autoplay={true} dotPosition={'bottom'}>
        {children}
      </Carousel>
    );
  };
  

export default memo(ActionCarousel);
