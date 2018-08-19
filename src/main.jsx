import React from 'react';
import ReactDOM from 'react-dom';
import AntdFormStore from './stores/antd/FormStore';
import OtherStore from './stores/antd/OtherStore';
import MapStore from './stores/map/MapStore';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import App from './router/RootRouter';
import {HashRouter} from 'react-router-dom';
import './index';


const stores = {
    AntdFormStore,
    OtherStore,
	MapStore,

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

