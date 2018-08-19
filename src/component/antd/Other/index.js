import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import './index.less';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import Row6 from './Row6';
import Row7 from './Row7';
import Row8 from './Row8';

@inject('OtherStore')
@observer
export default class Other extends React.Component{

    otherStore = null;

    constructor(props) {
        super(props);
        this.otherStore = props.OtherStore;
    }

    render() {
        return (
            <Row>
                <Row1/>
                <Row2 />
                <Row3 />
                <Row4 />
                <Row5 />
                <Row6 />
                <Row7 />
                <Row8 />
            </Row>
        );
    }
}
