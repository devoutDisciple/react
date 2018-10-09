/*
 * @Author: zhangzhen
 * @Date: 2018-10-09 21:45:14
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-10-09 21:45:45
 */
import {
    observable,
    action
} from 'mobx';

class CanvasStore {
    @observable.ref
    hello = 1;


    @action
    setCanvas() {
    }

}
export default new CanvasStore();
