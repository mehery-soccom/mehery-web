<template>
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i :class="icon"/>
                </div>
                <div>
                    {{heading}}
                    <div
                        class="page-title-subheading">
                        {{subheading}}
                    </div>
                </div>
            </div>
            <div class="page-title-actions">
                <router-link v-for="action in actions" tag="button" :to="action.link"
                    type="button" class="btn-shadow d-inline-flex align-items-center btn btn-success">
                    <font-awesome-icon class="mr-2" :icon="action.icon"/>
                    {{action.label}} 
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faStar,
        faPlus
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faStar,
        faPlus,
    );

    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        props: {
            icon: String,
            heading: String,
            subheading: String,
            actions : Array
        }
    }
</script>
