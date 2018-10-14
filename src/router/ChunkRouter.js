import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Form from '$component/antd/Form/index';
import Other from '$component/antd/Other/index';
import Canvas from '../component/canvas/index';
import Map from '$component/Map/Map';
import Dnd from '$component/dnd/index';
import Flow from '$component/flow/index';
import D3View from '$component/d3/index';
import ChatView from '$component/chat/index';
import Bullet from '../component/canvas/BulletText';
import {INIT_ROUTER} from '$config/stateConfig';


const ChunkRoute = () => {
    return (
        <div className="content">
            <Redirect from="/" to={INIT_ROUTER}/>
            <Route path="/antd/form" component={Form}></Route>
            <Route path="/antd/other" component={Other}></Route>
            <Route path="/canvas" component={Canvas}></Route>
            <Route path="/bullet" component={Bullet}></Route>
            <Route path="/map" component={Map}></Route>
            <Route path="/flow" component={Flow}></Route>
            <Route path="/dnd" component={Dnd}></Route>
            <Route path="/d3" component={D3View}></Route>
            <Route path="/chat" component={ChatView}></Route>
        </div>
    );
};

export default ChunkRoute;
