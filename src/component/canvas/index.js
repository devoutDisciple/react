import React from 'react';
import {inject, observer} from 'mobx-react';
import './index.less';
import CanvasStore from '../../stores/canvas/CanvasStore';
import ProcessCanvas from './Process';

@inject('CanvasStore')
@observer
export default class Map extends React.Component{

    canvasStore: CanvasStore = null;

    constructor(props) {
        super(props);
        this.canvasStore = props.CanvasStore;
    }

    componentDidMount() {
        this.drawClock();
    }

    drawClock() {
        let clock = function() {
            let canvas = document.getElementById('canvas1');
            let PI = Math.PI;
            let now = new Date();
            let hour = now.getHours();
            hour = hour > 12 ? hour - 12 : hour;
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            if (canvas.getContext) {
                let ctx = canvas.getContext('2d');
                ctx.save();
                ctx.clearRect(0, 0, 150, 150);
                // 画小时刻度
                ctx.translate(75, 75);
                ctx.scale(0.4, 0.4);
                ctx.rotate(-PI / 2);
                ctx.fillStyle = 'red';
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 8;
                ctx.lineCap = 'round';
                for (let i = 0; i < 12; i++) {
                    ctx.beginPath();
                    ctx.moveTo(100, 0);
                    ctx.lineTo(120, 0);
                    ctx.stroke();
                    ctx.rotate(PI / 6);
                    ctx.closePath();
                }
                ctx.save();
                ctx.restore();

                // 画分钟刻度
                ctx.lineWidth = 5;
                for (let i = 0; i < 60; i++) {
                    if (i % 5 != 0) {
                        ctx.beginPath();
                        ctx.moveTo(115, 0);
                        ctx.lineTo(120, 0);
                        ctx.stroke();
                    }
                    ctx.rotate(PI / 30);
                    ctx.closePath();
                }
                ctx.save();

                ctx.restore();
                // 画时针
                ctx.beginPath();
                ctx.lineWidth = 12;
                ctx.strokeStyle = 'red';
                ctx.rotate(PI * hour / 6 + PI * minutes / 360 + PI * seconds / 21600);
                ctx.moveTo(-20, 0);
                ctx.lineTo(60, 0);
                ctx.stroke();
                ctx.save();

                ctx.restore();
                // 画分针
                ctx.rotate(PI * minutes / 30 + PI * seconds / 1800);
                ctx.lineWidth = 8;
                ctx.strokeStyle = 'blue';
                ctx.beginPath();
                ctx.moveTo(-28, 0);
                ctx.lineTo(75, 0);
                ctx.stroke();
                ctx.save();

                ctx.restore();
                // 画秒针
                ctx.rotate(PI * seconds / 30);
                ctx.lineWidth = 4;
                ctx.strokeStyle = 'orange';
                ctx.beginPath();
                ctx.moveTo(-36, 0);
                ctx.lineTo(90, 0);
                ctx.stroke();
                ctx.save();

                // 画时针，分针，秒针交叉点的圆
                ctx.beginPath();
                ctx.arc(0, 0, 15, 0, PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.lineWidth = 5;
                ctx.arc(95, 0, 10, 0, PI * 2);
                ctx.stroke();
                ctx.restore();
                ctx.beginPath();
                ctx.strokeStyle = 'black';
                ctx.lineWidth = 10;
                ctx.arc(0, 0, 125, 0, PI * 2);
                ctx.stroke();
                ctx.restore();
            }
            window.requestAnimationFrame(clock);
        };
        window.requestAnimationFrame(clock);
    }


    render() {

        return (
            <div className='canvas'>
                <canvas id='canvas1' width='300' height='300'></canvas>
                <ProcessCanvas />
            </div>
        );
    }
}
