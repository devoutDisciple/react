/*
 * @Author: zhangzhen
 * @Date: 2018-09-02 15:03:30
 * @Last Modified by: zhangzhen
 * @Last Modified time: 2018-09-02 15:36:08
 */
import React from 'react';
import {inject, observer} from 'mobx-react';
import DndStore from '../../stores/dnd/DndStore';
import { DragSource } from 'react-dnd';


/* eslint-disable no-unused-vars*/
// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
  CARD: 'card'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const cardSource = {
  canDrag(props) {
    // You can disallow drag based on props
    return props.isReady;
  },

  isDragging(props, monitor) {
    // If your component gets unmounted while dragged
    // (like a card in Kanban board dragged between lists)
    // you can implement something like this to keep its
    // appearance dragged:
    console.log(props, 'isdragging_props');
    console.log(monitor, 'isdragging_monitor');
    return {};
},

  beginDrag(props, monitor, component) {
    // Return the data describing the dragged item
    const item = { id: props.id };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      // You can check whether the drop was successful
      // or if the drag ended but nobody handled the drop
      return;
    }

    // When dropped on a compatible target, do something.
    // Read the original dragged item from getItem():
    const item = monitor.getItem();

    // You may also read the drop result from the drop target
    // that handled the drop, if it returned an object from
    // its drop() method.
    const dropResult = monitor.getDropResult();
  }
};
@DragSource(Types.CARD, cardSource, (connect, monitor) => ({
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
}))
@inject('DndStore')
@observer
export default class Drop extends React.Component{

    dndStore: DndStore = null;

    constructor(props) {
        super(props);
        this.dndStore = props.DndStore;
    }


    render() {
        const { connectDragSource } = this.props;

        return (
            connectDragSource(
                <div className='dnd_drop'>
                    drop
                </div>
            )
        );
    }
}
