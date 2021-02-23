import AppRouter from './../router';

export default AppRouter.route({
    app : "agent",
    base : "/agent/",
    routes: [
        // Dashboards
        {
            path: '/app/home',
            name: 'agent-dashboard',
            component: () => import('./Module/Home.vue'),
        },

        {
            path: '/auth/login',
            name: 'agents_list',
            component: () => import('../Modules/Agents/AgentsList.vue'),
        },

        {
            path: '/app/chat/:id',
            name: 'agent-dashboard',
            component: () => import('./Module/Home.vue'),
        },

        {
            path: '/auth/login',
            name: 'login',
            meta: {layout: 'userpages'},
            component: () => import('../Modules/Auth/LoginBoxed.vue'),
        },

    ]
})
