/*
 * @Author: zhangzhen
 * @Date: 2018-10-10 21:27:41
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-10-10 21:44:09
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import CanvasStore from '../../stores/canvas/CanvasStore';

@inject('CanvasStore')
@observer
export default class Map extends React.Component{

    canvasStore: CanvasStore = null;
    width: Number = 0;
    height: Number = 0;
    PI: Number = Math.PI;
    speed: Number = 0.1;
    process: Number = 0;
    animation: Object = null;

    constructor(props) {
        super(props);
        this.canvasStore = props.CanvasStore;
    }

    componentDidMount() {
        let canvas = document.getElementById('canvas2');
        let ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        console.log(this.width, this.height);
        let self = this;
        (function startAnimation() {
            ctx.clearRect(0, 0, self.width, self.height);
            ctx.save();
            ctx.translate(self.width/2, self.height/2);
            self.drawOutCircle(ctx);
            self.writeText(ctx, self.process);
            self.drawInnerCircle(ctx, self.PI * self.process / 50);
            // if(speed == 100) {
            //     window.cancelAnimationFrame(animation);
            //     return;
            // }
            ctx.restore();
            self.process = self.process + self.speed;
            if(self.process > 100) self.process = 0;
            self.animation = window.requestAnimationFrame(startAnimation);
        })();
    }

    // 画灰色的圆圈
    drawOutCircle(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'gray';
        ctx.lineWidth = 8;
        ctx.arc(0, 0, this.width/4, 0, this.PI * 2);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    // 画蓝色的圈圈
    drawInnerCircle(ctx, endEdg) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.arc(0, 0, this.width/4, -this.PI/2, -this.PI/2 + endEdg);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }

    // 写文字
    writeText(ctx, text) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.font = '30px serif';
        ctx.strokeText(parseInt(text) + '%', text == 100 ? -25 : -20, 10);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }



    render() {

        return (
            <canvas id='canvas2' width='300' height='300'></canvas>
        );
    }
}
