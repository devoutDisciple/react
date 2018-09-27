import React from 'react';
import { Row, TreeSelect, DatePicker } from 'antd';
import {inject, observer} from 'mobx-react';
import {SpanComponent} from '$utils/StyleComponent';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const { RangePicker } = DatePicker;


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
        this.otherStore.setTreeValue(value);
    }

    render() {
        const {treeData, treeValue} = this.otherStore;
        const tProps = {
            treeData,
            value: treeValue,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            searchPlaceholder: 'Please select',
            style: {
              width: 300,
            },
          };
        return (
            <Row>
                <SpanComponent label="树选择">
                    <TreeSelect {...tProps} />
                </SpanComponent>
                <SpanComponent label="日期选择框">
                    <RangePicker size="default" />
                </SpanComponent>
            </Row>
        );
    }
}
