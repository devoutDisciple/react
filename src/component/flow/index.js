import React from 'react';
import {inject, observer} from 'mobx-react';
import './index.less';
import jsplumb from 'jsplumb';
import FlowStore from '../../stores/flow/FlowStore';
// import img1 from '../../imgs/1.jpg';
const Jsplumb = jsplumb.jsPlumb;
import $ from 'jquery';

@inject('FlowStore')
@observer
export default class Map extends React.Component{

    flowStore: FlowStore = null;
    jsplumbInstance : any = null;

    constructor(props) {
        super(props);
        this.flowStore = props.FlowStore;
    }

    componentDidMount() {
        Jsplumb.ready(() => {
            this.jsplumbInstance = Jsplumb.getInstance({
                PaintStyle:{
                    strokeWidth: 3,
                    stroke: '#567567',
                },
                HoverPaintStyle: {stroke: 'red', strokeWidth: 6, cursor: 'pointer' },
                EndpointStyle : { fill: 'red'  },
                EndpointHoverStyle: {
                    strokeWidth: 5,
                    stroke: 'blue',
                    outlineStroke: 'red',
                    outlineWidth: 2
                },
                Anchor : 'Bottom',
                DragOptions: { cursor: 'wait', zIndex: 20 },
                Endpoint: [ 'Dot', { radius: 5, cssClass: 'flow_endpoint', hoverClass: 'flow_endpoint_active' } ],
                Connector: [ 'Flowchart'],
                ConnectionOverlays:[
                    [ 'Label', { label: '关联', cssClass: 'csslabel'} ],//这个是鼠标拉出来的线的属性
                    [ 'Arrow', { location:1, id: 'arrow' } ]
                ],

            });
            this.jsplumbInstance.setContainer($('flow_chart'));
            console.log(this.jsplumbInstance);
            this.jsplumbInstance.connect({
                source: $('#test1'),
                target: $('#test2'),
                scope: 'Dot'
            });
            this.jsplumbInstance.bind('click', function (connection) {
                console.log(connection);
                // this.jsplumbInstance.deleteConnection(connection);
                this.jsplumbInstance.detach(connection);
            });
            this.jsplumbInstance.draggable(['test1', 'test2', 'test3']);

            const self = this;
            this.jsplumbInstance.bind('click', (conn, originalEvent) => {
                // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
                  //   this.jsplumbInstance.detach(conn);
                console.log(conn, 'click', originalEvent);
                // self.jsplumbInstance.detach(conn);
                self.jsplumbInstance.deleteConnection(conn);
             });
            //  contextmenu
            this.jsplumbInstance.bind('contextmenu', (conn) => {
                console.log(conn);
            });

            //  this.jsplumbInstance.bind("connectionDrag", function (connection) {
            //      console.log("connection " + connection.id + " is being dragged. suspendedElement is ", connection.suspendedElement, " of type ", connection.suspendedElementType);
            //  });

            //  this.jsplumbInstance.bind("connectionDragStop",  (connection) => {
            //      console.log("connection " + connection.id + " was dragged");
            //      console.log(this.jsplumbInstance.getAllConnections())
            //  });

            //  this.jsplumbInstance.bind("connectionMoved", function (params) {
            //      console.log("connection " + params.connection.id + " was moved");
            //  });
        });
    }

    btnClick() {
        // 删除所有的连线
        // this.jsplumbInstance.deleteEveryConnection();
        // 删除指定的连线
        // this.jsplumbInstance.deleteConnection({source: $('#test1'), target: $('#test2')});
        // 删除指定元素上的所有连线
        // this.jsplumbInstance.deleteConnectionsForElement($('#test1'));
    }

    addClick() {
        let dynamicAnchors = [ [ 1, 0.2, 1, 0 ], [ 0, 0.8, -1, 0 ] ];
        this.jsplumbInstance.connect({
            source: $('#test1'),
            target: $('#test3'),
            scope: 'Dot',
            anchor:dynamicAnchors
        });
        this.jsplumbInstance.connect({
            source: $('#test2'),
            target: $('#test3'),
            scope: 'Dot',
            overlays:[
                [ 'Label', { label: 'foo', id: 'label', location: 0.5 } ],
                [ 'Arrow', { location:1, id: 'arrow' } ]
            ],
        });
    }
    testClick() {
        console.log(this.jsplumbInstance.getAllConnections());
    }

    addAchor() {
        let isSource = {
            isSource:true
          };
        let isTarget = {
            isTarget: true,
        };
        let dotArr = ['Top', 'Bottom', 'Left', 'Right'];
        for(let i = 0; i< dotArr.length; i++) {
            this.jsplumbInstance.addEndpoint('test2', {
                anchor: dotArr[i]
            }, isSource);
            this.jsplumbInstance.addEndpoint('test3', {
                anchor: dotArr[i]
            }, isTarget);
        }
        this.jsplumbInstance.connect({
            source: $('#test2'),
            target: $('#test3'),
            scope: 'Dot',
            overlays:[
                [ 'Label', { label: 'foo', id: 'label', location: 0.5 } ],
                [ 'Arrow', { location:1, id: 'arrow' } ]
            ],
        });
        // this.jsplumbInstance.addEndpoint("test1", {
        //     anchor:"Top"
        // }, isSource);
        // this.jsplumbInstance.addEndpoint("test2", {
        //     anchor:"Left"
        // }, isTarget);
    }

    deleteBtn() {
        this.jsplumbInstance.remove('test2');
    }

    render() {

        return (
            <div className='flow_chart'>
                <button onClick={this.testClick.bind(this)}>test</button>
                <button onClick={this.btnClick.bind(this)}>删除指定元素的连线</button>
                <button onClick={this.addClick.bind(this)}>添加指定的连线</button>
                <button onClick={this.addAchor.bind(this)}>添加锚点</button>
                <button onClick={this.deleteBtn.bind(this)}>删除连线</button>
                <div id='test1'></div>
                <div id='test2'></div>
                <div id='test3'></div>
            </div>
        );
    }
}
