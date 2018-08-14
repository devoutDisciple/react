import {observable, action} from 'mobx';

class Test {
    @observable
    test1 = 12;
    @observable
    test2 = 13;

    @action
    setCountTest1(num) {
    	this.test1 = num;
    	return true;
    }
}
export default new Test();
