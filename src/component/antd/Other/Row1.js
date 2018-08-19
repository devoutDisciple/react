import React from 'react';
import { Row, AutoComplete, Cascader} from 'antd';
import {inject, observer} from 'mobx-react';
import {SpanComponent} from '$utils/StyleComponent';

@inject('OtherStore')
@observer
export default class Other extends React.Component{

    otherStore = null;

    constructor(props) {
        super(props);
        this.otherStore = props.OtherStore;
        this.onAutoCompleteSelect = this. onAutoCompleteSelect.bind(this);
        this.handleAutoCompleteSearch = this.handleAutoCompleteSearch.bind(this);
        this.onCascaderChange = this.onCascaderChange.bind(this);
        this.filterCascader = this.filterCascader.bind(this);
    }

    onAutoCompleteSelect(value) {
        console.log(`value is ${value}`);
    }

    async handleAutoCompleteSearch(value) {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        await this.otherStore.setAutoCompleteDataSource(result);
    }

    onCascaderChange(value, selectedOptions) {
        console.log(value, selectedOptions);
    }

    filterCascader(inputValue, path) {
        return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
    }

    render() {
        const {cascaderOption, autoCompleteDataSource} = this.otherStore;
        return (
            <Row>
                <SpanComponent label="自动选择">
                    <AutoComplete
                        dataSource={autoCompleteDataSource}
                        allowClear={true}
                        style={{ width: 200 }}
                        onSelect={this.onAutoCompleteSelect}
                        onSearch={this.handleAutoCompleteSearch}
                        placeholder="input here"/>
                </SpanComponent>
                <SpanComponent label="级联菜单" className2="antd_other_mycomponent_span_cascader">
                    <Cascader
                        options={cascaderOption}
                        onChange={this.onCascaderChange}
                        placeholder="Please select"
                        showSearch={{ filter: this.filterCascader }}/>
                </SpanComponent>
            </Row>
        );
    }
}
