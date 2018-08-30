import React from 'react';
import { NavLink } from 'react-router-dom';
import {Icon} from 'antd';
export const MyNavLink = (props) => {
    return (
        <NavLink
            to={props.path}>
            {props.icon ? <Icon type={props.icon} /> : null}
            <span>{props.children}</span>
        </NavLink>
    );
};
