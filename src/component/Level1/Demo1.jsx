import React from 'react';
import {Button} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('TestStore1')
@observer
export default class Demo1 extends React.Component{

    testStore1 = null;

    constructor(props) {
        super(props);
        this.testStore1 = props.TestStore1;
        this.btnClick = this.btnClick.bind(this);
    }

    async btnClick() {
        await this.testStore1.btnClick();
    }

    render() {
        return (
            <div><Button onClick={this.btnClick} type="primary">测试uri</Button></div>
        );
    }
}
