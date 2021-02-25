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
            path: '/app/chat/:id',
            name: 'agent-dashboard',
            component: () => import('./Module/Home.vue'),
        },
        
    ]
})
