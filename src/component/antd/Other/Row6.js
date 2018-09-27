import React from 'react';
import { Row, Button } from 'antd';
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
                <SpanComponent label="按钮">
                    <Button style={{marginLeft: 10}} type="primary" size="large">Primary</Button>
                    <Button size="large">Normal</Button>
                    <Button type="dashed" size="large">Dashed</Button>
                    <Button type="danger" size="large">Danger</Button>
                </SpanComponent>
            </Row>
        );
    }
}
