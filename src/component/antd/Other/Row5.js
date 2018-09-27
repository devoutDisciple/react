import React from 'react';
import { Row, Spin } from 'antd';
import {inject, observer} from 'mobx-react';
import {SpanComponent} from '$utils/StyleComponent';


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
                <SpanComponent label="加载中">
                    <Spin wrapperClassName="antd_other_row5_spin" size="small" />
                    <Spin wrapperClassName="antd_other_row5_spin" />
                    <Spin wrapperClassName="antd_other_row5_spin" size="large" />
                </SpanComponent>
            </Row>
        );
    }
}
