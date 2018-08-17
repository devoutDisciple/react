import React from 'react';
import {Switch,Route} from 'react-router-dom';
import MyLayout from '$component/Layout/MyLayout';

const MyRouter = () => {
    return (
        <Switch>
            <Route path ="/" component={MyLayout}></Route>
        </Switch>
    );
};

export default MyRouter;
