import React from 'react';
import { Row } from 'antd';
import {inject, observer} from 'mobx-react';


@inject('MapStore')
@observer
export default class Map extends React.Component{

    mapStore = null;

    constructor(props) {
        super(props);
        this.mapStore = props.MapStore;
    }

    componentDidMount() {
        var map = new AMap.Map('map_container', {
            zoom:11,//级别
            center: [116.397428, 39.90923],//中心点坐标
            viewMode:'3D'//使用3D视图
        });
    }

    render() {

        return (
            <Row>
                <div id="map_container" style={{width: '500px', height: '500px', border: '1px solid red'}}></div>
            </Row>
        );
    }
}
