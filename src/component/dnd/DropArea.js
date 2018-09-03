/*
 * @Author: zhangzhen
 * @Date: 2018-09-02 15:03:30
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-02 15:39:47
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import DndStore from '../../stores/dnd/DndStore';
import {Col} from 'antd';

@inject('DndStore')
@observer
export default class Drop extends React.Component{

    dndStore: DndStore = null;

    constructor(props) {
        super(props);
        this.dndStore = props.DndStore;
    }


    render() {

        return (
            <Col span={14} offset={2} className='dnd_drop'>
                drop
            </Col>
        );
    }
}
