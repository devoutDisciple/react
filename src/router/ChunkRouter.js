import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Form from '$component/antd/Form/index';
import Other from '../component/antd/Other/index';
import Map from '../component/Map/Map';
import {INIT_ROUTER} from '../config/stateConfig';


const ChunkRoute = () => {
    return (
        <div className="content">
            <Redirect from="/" to={INIT_ROUTER}/>
            <Route path="/antd/form" component={Form}></Route>
            <Route path="/antd/other" component={Other}></Route>
            <Route path="/map" component={Map}></Route>
        </div>
    );
};

export default ChunkRoute;
