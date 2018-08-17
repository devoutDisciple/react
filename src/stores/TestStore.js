import {observable, action, computed} from 'mobx';
import _ from 'lodash';
import Axios from '../utils/Axios';
import {TEST_JSURI} from '../apis/API_LIST';

class Test {
    @observable
    test1 = 12;
    @observable
    test2 = 13;

    @observable
    test3 = [1,2,3,4,5];

    @observable.ref
    test4 = [1,2,3,4,5];

    @observable.shallow
    test5 = [1,2,3,4,5];

    @action
    setCountTest1(num) {
    	this.test1 = num;
    	return true;
    }

    @computed
    get classProperty() {
    	return _.filter(this.test4, (item) => {
    		return item > 2;
    	});
    }

    @action
    chageTest4() {
    	this.test4 = _.concat(this.test4, 7, 8, 9);
    	return true;
    }

    @action
    chageTest5(num) {
    	this.test4 = _.concat(this.test4, num);
    	return true;
    }

    @action
    async btnClick() {
        try {
            await Axios.get(TEST_JSURI());
        } catch (error) {
            console.warn(`服务端出错: ${error}`);
        }

    }
}
export default new Test();
