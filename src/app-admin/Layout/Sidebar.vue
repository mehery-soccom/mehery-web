    <template>
    <div class="app-sidebar sidebar-shadow" @mouseover="toggleSidebarHover('add','closed-sidebar-open')" @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>

    </div>
</template>

<script>
    import {SidebarMenu} from 'vue-sidebar-menu'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'


    function menuFilter(menu){
        var header = null;
        return menu.filter(function(item){
            if(item.header == true){
                header = item;
                return true;
            }  
            if(item.child){
                item.child = menuFilter(item.child);
                item.enabled = (item.child.length > 0);
            }
            if(item.disabled === false || item.enabled === true){
                if(header)
                    header.enabled = true;
                return true;
            }
            return false;
        }).filter(function(item){
            return item.disabled === false || item.enabled === true;
        });
    }
    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: menuFilter([
                    {
                        header: true,
                        title: 'Dashboards',
                    },
                    {
                        title: 'Summary',
                        icon: 'pe-7s-graph3',
                        href: '/',
                        enabled : true
                    },
                    {
                        header: true,
                        title: 'Reports',
                    },
                    {
                        title: 'Sessions',
                        icon: 'pe-7s-chat',
                        href: '/app/reports/sessions',
                        enabled : true
                    },
                    {
                        header: true,
                        title: 'Admin',
                    },
                   {
                        title: 'Agents',
                        icon: 'pe-7s-users',
                        enabled : true,
                        href: '/app/admins/agents/list'
                    },
                    {
                        enabled : true,
                        icon: 'pe-7s-add-user',
                        href: '/app/admins/agents/add',
                        title: 'Add Agent',
                    },
                    {
                        enabled : true,
                        href: '/app/admins/agents/teams',
                        title: 'Teams',
                        icon: 'pe-7s-network',
                    },
                    {
                        title: 'Templates',
                        icon: 'pe-7s-browser',
                        enabled : true,
                        child: [
                            {   
                                enabled : true,
                                href: '/app/admins/tmpl/quickreplies',
                                title: 'Quick Replies',
                            },
                            {
                                href: '/pages/register-boxed',
                                title: 'Register Boxed',
                            },
                            {
                                href: '/pages/forgot-password-boxed',
                                title: 'Forgot Password Boxed',
                            },
                        ]
                    },
                    {
                        title: 'Dashboards',
                        icon: 'pe-7s-rocket',
                        child: [
                            {
                                enabled : false,
                                href: '/demo/dashboard/analytics',
                                title: 'Analytics',
                            },
                        ]
                    },
                    {
                        title: 'Pages',
                        icon: 'pe-7s-browser',
                        child: [
                            {   
                                enabled : false,
                                href: '/pages/login-boxed',
                                title: 'Login Boxed',
                            },
                            {
                                href: '/pages/register-boxed',
                                title: 'Register Boxed',
                            },
                            {
                                href: '/pages/forgot-password-boxed',
                                title: 'Forgot Password Boxed',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'UI Components',
                    },
                    {
                        icon: 'pe-7s-diamond',
                        title: 'Elements',
                        child: [
                            {
                                title: 'Buttons',
                                child: [
                                    {
                                        title: 'Standard',
                                        href: '/elements/buttons-standard',
                                    },
                                ]
                            },
                            {
                                enabled : false,
                                title: 'Dropdowns',
                                href: '/elements/dropdowns',
                            },
                            {
                                title: 'Icons',
                                href: '/elements/icons',
                            },
                            {
                                title: 'Badges',
                                href: '/elements/badges-labels',
                            },
                            {
                                title: 'Cards',
                                href: '/elements/cards',
                            },
                            {
                                title: 'List Groups',
                                href: '/elements/list-group',
                            },
                            {
                                title: 'Timeline',
                                enabled : false,
                                href: '/elements/timelines',
                            },
                            {
                                title: 'Utilities',
                                href: '/elements/utilities',
                            },
                        ],
                    },
                    {
                        icon: 'pe-7s-car',
                        title: 'Components',
                        child: [
                            {
                                title: 'Tabs',
                                href: '/components/tabs',
                            },
                            {
                                title: 'Accordions',
                                href: '/components/accordions',
                            },
                            {
                                title: 'Modals',
                                href: '/components/modals',
                            },
                            {
                                title: 'Progress Bar',
                                href: '/components/progress-bar',
                            },
                            {
                                title: 'Tooltips & Popovers',
                                href: '/components/tooltips-popovers',
                            },
                            {
                                title: 'Carousel',
                                href: '/components/carousel',
                            },
                            {
                                title: 'Pagination',
                                href: '/components/pagination',
                            },
                            {
                                title: 'Maps',
                                href: '/components/maps',
                            },
                        ],
                    },
                    {
                        icon: 'pe-7s-display2',
                        title: 'Tables',
                        child: [
                            {
                                title: 'Regular Tables',
                                href: '/tables/regular-tables',
                            },
                        ]
                    },
                    {
                        header: true,
                        title: 'Dashboard Boxes',
                    },
                    {
                        icon: 'pe-7s-graph2',
                        title: 'Chart Boxes',
                        enabled : false,
                        href: '/widgets/chart-boxes-3',
                    },
                    {
                        header: true,
                        title: 'Forms',
                    },
                    {
                        icon: 'pe-7s-light',
                        title: 'Elements',
                        child: [
                            {
                                enabled : false,
                                title: 'Controls',
                                href: '/forms/controls',
                            },
                            {
                                title: 'Layouts',
                                href: '/forms/layouts',
                            },
                        ],
                    },
                    {
                        header: true,
                        title: 'Charts',
                    },
                    {
                        enabled : false,
                        icon: 'pe-7s-graph2',
                        title: 'ChartJS',
                        href: '/charts/chartjs',
                    },
                ]),
                collapsed: true,

                windowWidth: 0,

            }
        },
        props: {
            sidebarbg: String,
        },
        methods: {

            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > '992') {
                    if (add === 'add') {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < '1350') {
                    el.classList.add('closed-sidebar', 'closed-sidebar-md');
                } else {
                    el.classList.remove('closed-sidebar', 'closed-sidebar-md');
                }
            },
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener('resize', this.getWindowWidth);

                //Init
                this.getWindowWidth()
            })
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.getWindowWidth);
        }
    }
</script>

<style scoped>
    .logo-src {
        height: 45px;
        width: 165px;
        background-size: 140px auto;
        background-repeat: no-repeat;
    }
    .closed-sidebar .app-sidebar .logo-src {
        width: 40px;
        height: 35px;
        background : url("./../../assets/images/logo-short.png") ;
        background-size: 40px auto;
        background-repeat: no-repeat;
    }
    .closed-sidebar-open.closed-sidebar .app-sidebar .logo-src { 
        width: 165px;
        height: 45px;
        background : url("./../../assets/images/logo-long.png") ;
        background-size: 140px auto;
        background-repeat: no-repeat;
    }
</style>
