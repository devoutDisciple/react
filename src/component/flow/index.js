import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import FlowStore from '../../stores/flow/FlowStore';


@inject('FlowStore')
@observer
export default class Map extends React.Component{

    flowStore: FlowStore = null;

    constructor(props) {
        super(props);
        this.flowStore = props.FlowStore;
    }


    render() {

        return (
            <Row>
            flow
            </Row>
        );
    }
}
