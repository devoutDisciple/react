/*
 * @Author: zhangzhen
 * @Date: 2018-10-10 21:27:41
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-10-10 22:09:08
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import './index.less';
import CanvasStore from '../../stores/canvas/CanvasStore';

@inject('CanvasStore')
@observer
export default class Map extends React.Component{

    canvasStore: CanvasStore = null;

    constructor(props) {
        super(props);
        this.canvasStore = props.CanvasStore;
    }

    componentDidMount() {
        let canvas = document.getElementById('canvas3');
        let ctx = canvas.getContext('2d');
        console.log(window.innerWidth);
        let width = window.innerWidth - 200 - 40;
        let height = window.innerHeight - 64 - 40;
        canvas.width = width;
        canvas.height = height;
        canvas.style.border = '1px solid red';
        let wordColor = '#33ff33', // 字体颜色
        backColor = 'rgba(0, 0, 0, .1)',// 字体渐变，原理是每当动画绘制新的一帧，就在上面覆盖一个透明度为0.1的黑色矩形。随着层数的叠加，文字就会被逐渐遮盖形成了我们看到的阴影。
        words = 'abqwertyuiop[]asdfghjkl;.,mnbvcxzQWASZXCDERFVBGTYHNMJUIK,.L;][PPO123456789+-*',
        wordArr = words.split(''), // 将文字拆分进数组
        fontSize = 18, // 字体大小
        cloums = width / fontSize, // 列数
        drops = []; // 下落的随机数
        for(let i = 0; i < cloums; i++){
            drops[i] = 1;
        }
        const self = this;
        (function drawFrame(){
            window.requestAnimationFrame(drawFrame, canvas);
            ctx.fillStyle = backColor;
            ctx.fillRect(0, 0, width, height);
            self.drawAnimation(ctx, fontSize, wordColor, wordArr, cloums, drops, height);
        }());


    }

    drawAnimation(ctx, fontSize, wordColor, wordArr, cloums, drops, height) {
        ctx.save();
        ctx.fillStyle = wordColor;
        ctx.font = fontSize + 'px arial';
        for(let i = 0; i < cloums; i++) {
            let text = wordArr[Math.floor(Math.random() * wordArr.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if(drops[i] * fontSize > height && Math.random() > 0.98) {
                drops[i] = 0;
            }
        }
        ctx.restore();
    }


    render() {

        return (
            <canvas id='canvas3'></canvas>
        );
    }
}
