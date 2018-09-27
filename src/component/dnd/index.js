import React from 'react';
import {inject, observer} from 'mobx-react';
import DndStore from '../../stores/dnd/DndStore';
import {Row} from 'antd';
import DragVew from './DragArea';
import DropVew from './DropArea';
import './index.less';


@inject('DndStore')
@observer
export default class Map extends React.Component{

    dndStore: DndStore = null;

    constructor(props) {
        super(props);
        this.dndStore = props.DndStore;
    }


    render() {
        return (
            <div className="dnd">
                <Row style={{height: '100%'}}>
                    <DragVew />
                    <DropVew />
                </Row>
            </div>
        );
    }
}
