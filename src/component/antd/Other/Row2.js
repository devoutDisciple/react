import React from 'react';
import { Row, Slider, InputNumber } from 'antd';
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

    onChange(value) {
        this.otherStore.setSliderValue(value);
    }


    render() {
        const {sliderValue} = this.otherStore;
        return (
            <Row>
                <SpanComponent label="滑动输入条">
                    <Slider min={1} max={100} onChange={this.onChange} style={{ width: '500px'}} value={sliderValue} />
                </SpanComponent>
                <InputNumber
                    min={1}
                    max={20}
                    style={{ marginLeft: 16 }}
                    value={sliderValue}
                    onChange={this.onChange}/>
            </Row>
        );
    }
}
