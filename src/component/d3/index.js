import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import D3Store from '../../stores/d3/D3Store';


@inject('D3Store')
@observer
export default class D3Demo extends React.Component{

    d3Store: D3Store = null;

    constructor(props) {
        super(props);
        this.d3Store = props.D3Store;
    }


    render() {

        return (
            <Row>
            d3
            </Row>
        );
    }
}
