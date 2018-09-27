/*
 * @Author: zhangzhen
 * @Date: 2018-09-12 21:29:14
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-12 23:39:13
 */
import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import ChatStore from '../../stores/chat/ChatStore';
import { socketUrl } from '../../config/stateConfig';
import io from 'socket.io-client';
import { Form, Input, message } from 'antd';
import {formItemLineLayout} from '$config/stateConfig';
const FormItem = Form.Item;
import Room from './Room';


@inject('ChatStore')
@observer
class ChatDemo extends React.Component{

    chatStore: ChatStore = null;
    socket = io(socketUrl);
    state = {
        roomVisible: false
    }

    constructor(props) {
        super(props);
        this.chatStore = props.ChatStore;
    }

    componentDidMount() {
        this.socket.on('connect', () => {
            console.log('连接成功');
        });
        this.socket.on('disconnect', (a, b) => {
            console.log(a, b);
        });
        this.socket.on('welcom', (data) => {
            message.success(`欢迎${data}用户`);
        });
    }

    // 用户登录
    login() {
        this.props.form.validateFields((err, values) => {
            if(err) return console.log(err);
            console.log(values);
            this.setState({roomVisible: true});
            this.socket.emit('login', values);
        });
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        const {roomVisible} = this.state;
        return (
            <Row>
                <Row>
                    {
                        !roomVisible ?
                        <Form>
                            <FormItem {...formItemLineLayout} label="姓名">
                                {getFieldDecorator('username', {
                                    rules: [{
                                    required: true,
                                    message: 'Please input your name',
                                    }],
                                })(
                                    <Input onPressEnter={this.login.bind(this)} placeholder="Please input your name" />
                                )}
                            </FormItem>
                            <FormItem {...formItemLineLayout} label="密码">
                                {getFieldDecorator('password', {
                                    rules: [{
                                    required: true,
                                    message: 'Please input your password',
                                    }],
                                })(
                                    <Input onPressEnter={this.login.bind(this)} placeholder="Please input your age" />
                                )}
                            </FormItem>
                        </Form>
                        :
                        <Room />
                    }

                </Row>
            </Row>
        );
    }
}

const ChatDemoForm = Form.create()(ChatDemo);
export default ChatDemoForm;
