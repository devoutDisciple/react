/*
 * @Author: zhangzhen
 * @Date: 2018-08-30 23:04:10
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-08-30 23:05:01
 */
import {
    observable,
    action
} from 'mobx';

class FlowStore {
    @observable.ref
    hello = 1;


    @action
    setCascaderOption() {
    }

}
export default new FlowStore();
