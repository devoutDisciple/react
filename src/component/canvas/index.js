import React from 'react';
import {inject, observer} from 'mobx-react';
import './index.less';
import CanvasStore from '../../stores/canvas/CanvasStore';

@inject('CanvasStore')
@observer
export default class Map extends React.Component{

    canvasStore: CanvasStore = null;
    jsplumbInstance : any = null;

    constructor(props) {
        super(props);
        this.canvasStore = props.CanvasStore;
    }


    render() {

        return (
            <div className='canvas'>
                canvas
            </div>
        );
    }
}
