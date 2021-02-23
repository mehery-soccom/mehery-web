import AppRouter from './../router';

export default AppRouter.route({
    app : "admin",
    base : "/admin/",
    routes: [
        // Dashboards
        {
            path: '/',
            name: 'myanalytics',
            component: () => import('../DemoPages/Dashboards/MyAnalytics.vue'),
        },

        {
            path: '/app/admins/agents/list',
            name: 'agents_list',
            component: () => import('../Modules/Agents/AgentsList.vue'),
        },

        {
            path: '/app/admins/agents/add',
            name: 'agents_add',
            component: () => import('../Modules/Agents/AgentsAdd.vue'),
        },

        {
            path: '/auth/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../Modules/Auth/LoginBoxed.vue'),
        },

    ]
})
