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
        key: 'map',
        label: '地图',
        icon: 'alipay-circle',
        path: '/map'
    },
    {
        key: 'sub_2',
        label: '可视化数据2',
        icon: 'area-chart4',
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
