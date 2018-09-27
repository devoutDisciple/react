/*
 * @Author: zhangzhen
 * @Date: 2018-09-02 15:03:55
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-02 15:55:45
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import DndStore from '../../stores/dnd/DndStore';
import {Row, Col} from 'antd';


@inject('DndStore')
@observer
export default class Drag extends React.Component{

    dndStore: DndStore = null;

    constructor(props) {
        super(props);
        this.dndStore = props.DndStore;
    }


    render() {

        return (
            <Col span={6} offset={2} className='dnd_drag'>
                <Row className="dnd_drag_are">
                    <Col span={6}>拖拽区域1：</Col>
                    <Col span={18} className='dnd_drag_area1'></Col>
                    {/* <div className='dnd_drag_are1'>drag1</div> */}
                </Row>
                <Row className="dnd_drag_are">
                    <Col span={6}>拖拽区域2：</Col>
                    <Col span={18} className='dnd_drag_area1'></Col>
                    {/* <div className='dnd_drag_are1'>drag1</div> */}
                </Row>
            </Col>
        );
    }
}
