import React from 'react';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import Menu from '../Menu/Menu';
import {inject, observer} from 'mobx-react';
import {ROOT_HEADER} from '../../config/Style';
import ChunkRoute from '../../router/ChunkRouter';
import './myLayout.less';
import HomeStore from '../../stores/home/HomeStore';

@inject('HomeStore')
@observer
export default class MyLayout extends React.Component{
    homeStore: HomeStore = null;

    constructor(props) {
        super(props);
        this.homeStore = props.HomeStore;
    }

    onCollapse() {
        this.homeStore.setCollapsed();
    }

    render() {
        const {collapsed, collapsible}  = this.homeStore;
        return (
            <Layout className="root_layout">
                <Sider
                    collapsed={collapsed}
                    collapsible={collapsible}
                    onCollapse={this.onCollapse.bind(this)}
                    className="root_menu">
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
