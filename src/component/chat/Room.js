/*
 * @Author: zhangzhen
 * @Date: 2018-09-12 21:29:14
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-12 23:25:14
 */
import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import ChatStore from '../../stores/chat/ChatStore';
import { socketUrl } from '../../config/stateConfig';
import io from 'socket.io-client';
import {Input} from 'antd';


@inject('ChatStore')
@observer
export default class ChatDemo extends React.Component{

    chatStore: ChatStore = null;

    constructor(props) {
        super(props);
        this.chatStore = props.ChatStore;
    }

    componentDidMount() {
        const socket = io(socketUrl);
        socket.on('connect', (a, b) => {
            console.log(a, b);
        });
        socket.on('disconnect', (a, b) => {
            console.log(a, b);
        });
        // let socketIO = new WebSocket(socketUrl);
        // socketIO.onopen = (socket, evt) => {
        //     console.log(socket, evt);
        // };
    }

    sendMessage() {
        console.log(document.getElementById('input').value);
    }


    render() {
        return (
            <Row>
                <Row>
                    <textarea style={{width: '1200px', height: '500px'}}></textarea>
                    <Input id="input" ref={ref => this.input = ref} onPressEnter={this.sendMessage.bind(this)}/>
                </Row>
            </Row>
        );
    }
}

