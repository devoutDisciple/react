import React from 'react';
import ReactDOM from 'react-dom';
import TestStore1 from './stores/TestStore';
import TestStore2 from './stores/TestStore2';
import AntdFormStore from './stores/antd/FormStore';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import App from './router/RootRouter';
import {HashRouter} from 'react-router-dom';
import './index';


const stores = {
	TestStore1,
    TestStore2,
    AntdFormStore
};
// 开启严格模式
configure({ enforceActions: 'strict' });

const render = () => {
	ReactDOM.render(
        <Provider {...stores}>
            <HashRouter>
                <App />
            </HashRouter>
		</Provider>,
		document.getElementById('root')
	);
};
render();

