import React from 'react';
import {inject, observer} from 'mobx-react';
import TestStore1 from '../stores/TestStore';
import {Button} from 'antd';
import _ from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/lodash';
import DevTools from 'mobx-react-devtools';


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

    async componentDidMount() {
    	console.log(this.testStore1.test3);
    	console.log(this.testStore1.test4);
    	console.log(this.testStore1.test5, 'test5');
    	await this.testStore1.chageTest4();
    	console.log(this.testStore1.test4);// console.log(this.testStore1.classProperty);
    }

    async addDom(num) {
    	console.log(this.testStore1.test3);
    	await this.testStore1.chageTest5(num);
    }

    render() {
    	return (
    		<MyComponent>
    			{process.env.NODE_ENV == 'development' && <DevTools />}
    			<span>{this.testStore1.test1}</span>
    			<Button
    				type="primary"
    				onClick={() => this.testStore1.setCountTest1(this.testStore1.test1 + 1)}>
                    点击
    			</Button>
    			<Button
    				type="primary"
    				onClick={this.addDom.bind(this,  _.random(1000))}>
                    增加div
    			</Button>
    			{
    				this.testStore1.test4.map((item, index) => <div key={index}>{item}</div>)
    			}
    			{
    				this.testStore1.test3.map((item, index) => <div key={index}>{item}</div>)
    			}
    		</MyComponent>
    	);
    }
}
