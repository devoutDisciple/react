import React from 'react';
import { Table } from 'antd';
import {inject, observer} from 'mobx-react';
import EditDialog from './EditDialog';


@inject('AntdFormStore')
@observer
export default class Search extends React.Component{

    antdFormStore = null;

    constructor(props) {
        super(props);
        this.antdFormStore = props.AntdFormStore;
    }

    componentDidMount() {
        setTimeout(async () => {
            await this.antdFormStore.setLoading(false);
            await this.antdFormStore.setDataSource();
        }, 2000);
    }

    async onEdit(record) {
        console.log(record);
        await this.antdFormStore.setEditData(record);
        await this.antdFormStore.setEditDialogVisible(true);
    }

    onDelete(text, record) {
        console.log(text, record);
    }


    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '性别',
            dataIndex: 'sex',
            key: 'sex',
        }, {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        }, {
            title: '注册时间',
            dataIndex: 'registerTime',
            key: 'address',
        }, {
            title: '操作',
            dataIndex: 'operation',
            key: 'operation',
            render: (text, record) => {
                return (
                    <span>
                        <a href="javascript:;" onClick={this.onEdit.bind(this, record)}>修改</a>
                        <a href="javascript:;" style={{marginLeft: '10px'}} onClick={this.onDelete.bind(this, text, record)}>删除</a>
                    </span>
                );
            }
        }];
        const {dataSource, loading} = this.antdFormStore;
        return (
            <div className="antd_form_mytable">
                <Table loading={loading} columns={columns} dataSource={dataSource}/>
                {this.antdFormStore.editDialogVisible && <EditDialog />}
            </div>

        );
    }
}
