import React from 'react';
import { Row, Timeline } from 'antd';
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
                <SpanComponent label="时间轴">
                    <Timeline>
                        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                        <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>
                </SpanComponent>
            </Row>
        );
    }
}
