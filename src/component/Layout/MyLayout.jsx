import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import Menu from '../Menu/Menu';
import {ROOT_HEADER} from '../../config/Style';
import ChunkRoute from '../../router/ChunkRouter';
import './myLayout.less';

export default class MyLayout extends React.Component{

    render() {
        return (
            <Layout className="root_layout">
                <Sider collapsed={false} collapsible={false} className="root_menu">
                    <Menu />
                </Sider>
                <Layout>
                    <Header style={ROOT_HEADER}>React-Demo</Header>
                    <Content className="root_content"><ChunkRoute /></Content>
                </Layout>
            </Layout>
        );
    }
}
