import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';
import DndStore from '../../stores/dnd/DndStore';


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
            <Row>
               dnd
            </Row>
        );
    }
}
