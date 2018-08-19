import {
    observable,
    action
} from 'mobx';

class OtherStore {
    @observable.ref
   hello = 1;


    @action
    setCascaderOption() {
    }




}
export default new OtherStore();
