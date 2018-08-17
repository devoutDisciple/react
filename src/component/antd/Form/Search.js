import React from 'react';
import { Form, Input, Button, Col, Radio } from 'antd';
const FormItem = Form.Item;
import {inject, observer} from 'mobx-react';
import {formItemLineLayout} from '$config/stateConfig';
const RadioGroup = Radio.Group;
import AddDialog from './AddDialog';


@inject('AntdFormStore')
@observer
class Search extends React.Component{

    antdFormStore = null;

    constructor(props) {
        super(props);
        this.antdFormStore = props.AntdFormStore;
        this.addItem = this.addItem.bind(this);
    }

    async addItem() {
        await this.antdFormStore.setAddDialogVisible(true);
    }


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form className="antd_form_serch_header">
                    <Col span={6}>
                        <FormItem {...formItemLineLayout} label="姓名">
                            {getFieldDecorator('username', {
                                rules: [{
                                required: true,
                                message: 'Please input your name',
                                }],
                            })(
                                <Input placeholder="Please input your name" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem {...formItemLineLayout} label="性别">
                            {getFieldDecorator('sex')(
                                <RadioGroup>
                                    <Radio value="man">男</Radio>
                                    <Radio value="woman">女</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                    </Col>
                    <Button type="primary">
                        查询
                    </Button>
                    <Button style={{marginLeft: '20px'}} type="primary" onClick={this.addItem}>
                        新增
                    </Button>
                </Form>
                {
                    this.antdFormStore.addDialogVisible && <AddDialog />
                }
            </div>
        );
    }
}

const SearchForm = Form.create()(Search);
export default SearchForm;
