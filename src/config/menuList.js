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
                path: '/'
            },

        ]
    },
    {
        key: 'echarts',
        label: 'echarts',
        icon: 'area-chart',
        children: [
            {
                key: 'line',
                label: '折线图',
                icon: 'line-chart',
                path: '/'
            },

        ]
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
