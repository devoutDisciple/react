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
