import AntdFormStore from './antd/FormStore';
import OtherStore from './antd/OtherStore';
import MapStore from './map/MapStore';
import HomeStore from './home/HomeStore';
import DndStore from './dnd/DndStore';
import FlowStore from './flow/FlowStore';

export const createStore = () => {
    return {
        AntdFormStore,
        OtherStore,
        MapStore,
        HomeStore,
        DndStore,
        FlowStore
    };
};
