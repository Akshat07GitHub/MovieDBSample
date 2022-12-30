import React from "react";
import IndexPage from "./components/indexPage/indexPage";
import { store } from "./state";
import { Provider }   from 'react-redux';
import HeaderComponent from "./components/container/header";
import DetailPage from "./components/detailScreen/detailPage";
import { Layout } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
const { Header, Content } = Layout;

const App = ()=>{
    return (
    <Provider store={store}>
        <Layout 
        style={{
            marginLeft:  10,
            background: '#fff',
          }}
          >
            <Header style={{
                background : '#fff',
                padding : 0
            }}>
                <HeaderComponent/>    
            </Header>
            <Content  style={{padding : 20}}>
                <BrowserRouter>
                    <Routes>
                        <Route index path="/" element={<IndexPage/>}/>
                        <Route path="movie/:id" element = {<DetailPage/>}/>
                        <Route path="*" element={<IndexPage/>}/>
                    </Routes>
                </BrowserRouter>
            </Content>
        </Layout> 
    </Provider>
    )
}

export default App;