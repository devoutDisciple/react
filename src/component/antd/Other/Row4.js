import React from 'react';
import { Row, Button, Drawer } from 'antd';
import {inject, observer} from 'mobx-react';
import {SpanComponent} from '$utils/StyleComponent';


@inject('OtherStore')
@observer
export default class Other extends React.Component{

    otherStore = null;

    state = {
        visible: false
    }

    constructor(props) {
        super(props);
        this.otherStore = props.OtherStore;
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    showDrawer() {
        this.setState({visible: true});
    }

    onClose() {
        this.setState({visible: false});
    }



    render() {

        return (
            <Row>
                <SpanComponent label="抽屉">
                    <Button type="primary" onClick={this.showDrawer}>click</Button>
                    <Drawer
                        title="Basic Drawer"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </SpanComponent>
            </Row>
        );
    }
}
