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
            component: () => import('./Modules/AgentsList.vue'),
        },

        {
            path: '/app/admins/agents/add',
            name: 'agents_add',
            component: () => import('./Modules/AgentsAdd.vue'),
        },

        {
            path: '/app/admins/agents/teams',
            name: 'dept',
            component: () => import('./Modules/AgentsTeams.vue'),
        },

        {
            path: '/auth/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('./Modules/LoginBoxed.vue'),
        },

    ]
})
