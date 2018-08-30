import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from './stores/createStore';
import {Provider} from 'mobx-react';
import {configure} from 'mobx';
import App from './router/RootRouter';
import {HashRouter} from 'react-router-dom';
import './index';


const stores = createStore();
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

