const list = [
    {
        key: 'ant-design',
        label: 'ant-design',
        icon: 'ant-design',
        children: [
            {
                key: 'form',
                label: 'form',
                icon: 'lock',
                path: '/antd/form'
            },
            {
                key: 'other',
                label: 'other',
                icon: 'ellipsis',
                path: '/antd/other'
            },

        ]
    },
    {
        key: 'canvas',
        label: 'canvas',
        icon: 'alipay-circle',
        path: '/canvas'
    },
    {
        key: 'bullet',
        label: '黑幕特效',
        icon: 'alipay-circle',
        path: '/bullet'
    },
    {
        key: 'map',
        label: '地图',
        icon: 'alipay-circle',
        path: '/map'
    },
    {
        key: 'chat',
        label: '聊天室',
        icon: 'alipay-circle',
        path: '/chat'
    },
    {
        key: 'flow',
        label: 'flow',
        icon: 'alipay-circle',
        path: '/flow'
    },
    {
        key: 'dnd',
        label: 'dnd',
        icon: 'alipay-circle',
        path: '/dnd'
    },
    {
        key: 'd3',
        label: 'd3',
        icon: 'alipay-circle',
        path: '/d3'
    },
    {
        key: 'sub_2',
        label: '可视化数据2',
        icon: 'alipay-circle',
        children: [
            {
                key: 'sub_2_1',
                label: 'echarts5',
                icon: 'area-chart',
                path: '/'
            },
            {
                key: 'sub_2_2',
                label: 'echarts6',
                icon: 'area-chart',
                children: [
                    {
                        key: 'sub_2_2_1',
                        label: 'echarts7',
                        icon: 'area-chart',
                        path: '/'
                    }
                ]
            },
        ]
    }
];
export default list;
