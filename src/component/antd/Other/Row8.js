import React from 'react';
import { Row, Carousel } from 'antd';
import {inject, observer} from 'mobx-react';
import {SpanComponent} from '$utils/StyleComponent';


@inject('OtherStore')
@observer
export default class Other extends React.Component{

    otherStore = null;

    constructor(props) {
        super(props);
        this.otherStore = props.OtherStore;
        this.onChange = this.onChange.bind(this);
    }

    onChange() {

    }

    render() {

        return (
            <Row>
                <SpanComponent label="走马灯">
                    <div style={{width: 800}}>
                        <Carousel vertical>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                        </Carousel>
                    </div>
                </SpanComponent>
            </Row>
        );
    }
}
