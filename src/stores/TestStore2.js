import {observable, action} from 'mobx';

class Test2 {
    @observable
    var1 = 12;
    @observable
    var2 = 13;

    @action
    setVar1(num) {
    	this.var1 = num;
    	return true;
    }

    invokeSetVar1(num) {
    	this.setVar1(num);
    }
}
export default new Test2();
