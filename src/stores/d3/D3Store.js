/*
 * @Author: zhangzhen
 * @Date: 2018-08-30 23:13:47
 * @Last Modified by:   zhangzhen
 * @Last Modified time: 2018-08-30 23:13:47
 */
import {
    observable,
    action
} from 'mobx';

class DndStore {
    @observable.ref
    hello = 1;


    @action
    setCascaderOption() {
    }

}
export default new DndStore();
