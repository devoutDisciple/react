import React from 'react';
import { Row} from 'antd';
import {inject, observer} from 'mobx-react';
import SearchForm from './Search';
import MyTable from './Table';
import './index.less';

@inject('AntdFormStore')
@observer
export default class Demo1 extends React.Component{

    antdFormStore = null;

    constructor(props) {
        super(props);
        this.antdFormStore = props.AntdFormStore;
    }

    render() {
        return (
            <Row>
                <SearchForm />
                <MyTable />
            </Row>
        );
    }
}
