import React from 'react';
import {inject, observer} from 'mobx-react';
import TestStore1 from '../stores/TestStore';
import {Button} from 'antd';

console.log(TestStore1);

const MyComponent = (props) => (
	<div style={{
		width: '500px',
		height: '500px',
		border: '1px solid red'
	}} {...props}></div>
);


@inject('TestStore1')
@observer
export default class App extends React.Component{
    testStore1 = null;

    constructor(props) {
    	super(props);
    	this.testStore1 = props.TestStore1;
    }

    componentDidMount() {
    	console.log(this.testStore1.test1);
    }

    render() {
    	return (
    		<MyComponent>
    			<span>{this.testStore1.test1}</span>
    			<Button
    				type="primary"
    				onClick={() => {this.testStore1.setCountTest1(this.testStore1.test1 + 1);}}>
                    点击
    			</Button>
    		</MyComponent>
    	);
    }
}
