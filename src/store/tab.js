

export default ({
    state: {
        isCollapse: false,     // 控制菜单的展开还是收起
        tabsList: [            // 面包屑数据
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home',
            },
        ],
    },
    getters: {
    },
    mutations: {
        // 修改菜单展开收起的方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // 判断是否是首页
            if(val.name !== 'home') {
               const index = state.tabsList.findIndex(item => item.name===val.name);
               // 如果不存在添加进去
                if(index === -1) {
                    state.tabsList.push(val);
                }
            }
        },
        // 删除指定的tag数据
        closeTag(state, item) {
            console.warn(item)
            const index = state.tabsList.findIndex(val => val.name==item.name);
            state.tabsList.splice(index, 1);
        },
    },
    actions: {
    },
})
