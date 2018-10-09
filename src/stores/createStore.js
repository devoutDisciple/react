import AntdFormStore from './antd/FormStore';
import OtherStore from './antd/OtherStore';
import MapStore from './map/MapStore';
import HomeStore from './home/HomeStore';
import DndStore from './dnd/DndStore';
import FlowStore from './flow/FlowStore';
import D3Store from './d3/D3Store';
import ChatStore from './chat/ChatStore';
import CanvasStore from './canvas/CanvasStore';

export const createStore = () => {
    return {
        AntdFormStore,
        OtherStore,
        MapStore,
        HomeStore,
        DndStore,
        FlowStore,
        D3Store,
        ChatStore,
        CanvasStore
    };
};
