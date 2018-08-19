import {
    observable,
    action
} from 'mobx';
import _ from 'lodash';

class OtherStore {
    @observable.ref
    cascaderOption = [{
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
                value: 'xihu',
                label: 'West Lake',
            }, {
                value: 'xiasha',
                label: 'Xia Sha',
                disabled: true,
            }],
        }],
    }, {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
                value: 'zhonghuamen',
                label: 'Zhong Hua men',
            }],
        }],
    }];

    @observable.ref
    autoCompleteDataSource = [];

    @observable
    sliderValue = 34;

    @observable.ref
    treeData = [{
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [{
            title: 'Child Node1',
            value: '0-0-0',
            key: '0-0-0',
        },{
            title: 'Child Node2',
            value: '0-0-1',
            key: '0-0-1',
        },{
            title: 'Child Node3',
            value: '0-0-2',
            key: '0-0-2',
        },{
            title: 'Child Node4',
            value: '0-0-3',
            key: '0-0-3',
        }],
    }, {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [{
            title: 'Child Node3',
            value: '0-1-0',
            key: '0-1-0',
        }, {
            title: 'Child Node4',
            value: '0-1-1',
            key: '0-1-1',
        }, {
            title: 'Child Node5',
            value: '0-1-2',
            key: '0-1-2',
        }],
    }];

    @observable
    treeValue = ['0-0-0']

    @action
    setTreeValue(value) {
        this.treeValue = value;
    }

    @action
    setSliderValue(value) {
        this.sliderValue = value;
    }

    @action
    setAutoCompleteDataSource(data) {
        this.autoCompleteDataSource = data;
    }


    @action
    setCascaderOption(value) {
        this.cascaderOption = _.toLower(typeof value) === 'array' ? value : [];
    }




}
export default new OtherStore();
