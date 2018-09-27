/*
 * @Author: zhangzhen
 * @Date: 2018-08-30 22:43:24
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-08-30 22:45:53
 */
import {menuState} from '../../config/stateConfig';
import {
    observable,
    action
} from 'mobx';

class HomeStore {
    @observable
    collapsed: Boolean = menuState.collapsed;

    @observable
    collapsible: Boolean = menuState.collapsible;


    @action
    setCollapsed() {
        this.collapsed = !this.collapsed;
    }

    @action
    setCollapsible() {
        this.collapsible = !this.collapsible;
    }

}
export default new HomeStore();
