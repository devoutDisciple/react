import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import Form from '$component/antd/Form/index';


const ChunkRoute = () => {
    return (
        <div className="content">
            <Redirect from="/" to="/antd/form"/>
            <Route path="/antd/form" component={Form}></Route>
        </div>
    );
};

export default ChunkRoute;
