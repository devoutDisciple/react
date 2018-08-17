import React from 'react';
import {inject, observer} from 'mobx-react';
import { Modal } from 'antd';
import { Form, Input, DatePicker, Radio } from 'antd';
const RadioGroup = Radio.Group;
import {formItemLineLayout} from '$config/stateConfig';
const FormItem = Form.Item;


@inject('AntdFormStore')
@observer
class AddDialog extends React.Component{

    antdFormStore = null;

    constructor(props) {
        super(props);
        this.antdFormStore = props.AntdFormStore;
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleOk() {
        this.antdFormStore.setAddDialogVisible(false);
    }

    handleCancel() {
        this.antdFormStore.setAddDialogVisible(false);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Modal
            title="新增"
            visible={true}
            onOk={this.handleOk}
            onCancel={this.handleCancel}>
                <Form>
                    <FormItem {...formItemLineLayout} label="姓名">
                        {getFieldDecorator('name', {
                            rules: [{
                            required: true,
                            message: 'Please input your name',
                            }],
                        })(
                            <Input placeholder="Please input your name" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLineLayout} label="年龄">
                        {getFieldDecorator('age', {
                            rules: [{
                            required: true,
                            message: 'Please input your age',
                            }],
                        })(
                            <Input placeholder="Please input your age" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLineLayout} label="性别">
                        {getFieldDecorator('sex', {
                            rules: [{
                            required: true,
                            message: 'Please input your sex',
                            }],
                        })(
                            <RadioGroup>
                                <Radio value="man">男</Radio>
                                <Radio value="woman">女</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                    <FormItem {...formItemLineLayout} label="手机号">
                        {getFieldDecorator('phone', {
                            rules: [{
                            required: true,
                            message: 'Please input your phone',
                            }],
                        })(
                            <Input placeholder="Please input your phone" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLineLayout} label="注册时间">
                        {getFieldDecorator('registerTime', {
                            rules: [{
                            required: true,
                            message: 'Please input your registerTime',
                            }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem>
                </Form>
          </Modal>

        );
    }
}

const AddDialogForm = Form.create()(AddDialog);
export default AddDialogForm;
