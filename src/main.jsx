import React from 'react';
import ReactDOM from 'react-dom';
import TestStore1 from './stores/TestStore';
import TestStore2 from './stores/TestStore2';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import App from './component/Test';

const stores = {
	TestStore1,
	TestStore2
};
// 开启严格模式
configure({enforceActions: true});

const render = () => {
	ReactDOM.render(
		<Provider {...stores}>
			<App />
		</Provider>,
		document.getElementById('root')
	);
};
render();

