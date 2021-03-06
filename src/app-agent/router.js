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
            path: '/app/chat/:contactId/:sessionId',
            name: 'agent-dashboard',
            component: () => import('./Module/Home.vue'),
        },
        {
            path: '/app/chat/:contactId/:sessionId/:profileId',
            name: 'agent-dashboards',
            component: () => import('./Module/Home.vue'),
        },
        {
            path: '/app/chistory/:contactId/:sessionId',
            name: 'agent-dashboard',
            component: () => import('./Module/Home.vue'),
        },
    ]
})
