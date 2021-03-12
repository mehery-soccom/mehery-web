<template>
    <div class="d-flex">
        <div class="header-btn-lg pr-0">
            <div class="widget-content p-0">
                <div class="widget-content-wrapper">
        
                     <div class="widget-content-left">
                        <b-dropdown toggle-class="p-0 mr-2" menu-class="dropdown-menu-lg" variant="link" right>

                        <div class="widget-content-left  ml-3 header-user-info">
                            <div class="widget-heading">Super</div>
                            <div class="widget-subheading">System Admin</div>
                        </div>

                            <span slot="button-content">
                                <div class="icon-wrapper icon-wrapper-alt rounded-circle">
                                    <img width="42" class="rounded-circle" src="@/assets/images/avatars/profile.png" alt="">
                                </div>
                            </span>
                            <div tabindex="-1" class="dropdown-divider"></div>
                            <span>
                                <a  href="/dev/auth/logout"
                                    type="button" tabindex="0" class="dropdown-item">Logout</a>
                            </span>
                        </b-dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faAngleDown,
        faCalendarAlt,
        faTrashAlt,
        faCheck,
        faFileAlt,
        faCloudDownloadAlt,
        faFileExcel,
        faFilePdf,
        faFileArchive,
        faEllipsisH,
    );

    export default {
        components: {
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
        },
        computed : {
          
        },
        data : () => ({
        }),
        methods: {
            async logout (){
                await this.$store.dispatch('LogOut')
                this.$router.push('auth/login')
            }
        },

        
    }


</script>
