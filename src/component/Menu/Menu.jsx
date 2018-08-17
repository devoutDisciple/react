import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
import {MyNavLink} from '$utils/MyNavLink';
import menuList from '$config/menuList';
import {menuState} from '$config/stateConfig';

export default class MyMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    rendreMenu(data) {
        return data.map((item) => {
            return item.children ?
            <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.label}</span></span>}>
                {this.rendreMenu(item.children)}
            </SubMenu>
            :
            <Menu.Item key={item.key}><MyNavLink icon={item.icon} path={item.path}>{item.label}</MyNavLink></Menu.Item>;
        });
    }

    render() {
        return (
        <Menu
            defaultSelectedKeys={menuState.defaultSelectedKeys}
            defaultOpenKeys={menuState.defaultOpenKeys}
            mode={menuState.mode}
            theme={menuState.theme}>
            {this.rendreMenu(menuList)}
        </Menu>
        );
    }
}
