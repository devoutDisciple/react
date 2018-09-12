/*
 * @Author: zhangzhen
 * @Date: 2018-09-12 21:30:12
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-12 21:30:32
 */
import {
    observable,
    action
} from 'mobx';

class ChatStore {
    @observable.ref
    hello = 1;


    @action
    setCascaderOption() {
    }

}
export default new ChatStore();
