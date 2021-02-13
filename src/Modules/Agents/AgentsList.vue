<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-card title="" class="main-card mb-4">
        <b-table :striped="striped"
                 :bordered="bordered"
                 :outlined="outlined"
                 :small="small"
                 :hover="hover"
                 :dark="dark"
                 :fixed="fixed"
                 :foot-clone="footClone"
                 :items="items"
                 :fields="fields">
        </b-table>
    </b-card>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  export default {
    components: {
      PageTitle,
    },
    data: () => ({
      heading: 'Agents',
      subheading: 'View all Agents.',
      icon: 'pe-7s-users icon-gradient bg-happy-itmeo',

      fields: [ 'first_name', 'last_name', 'age' ],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
      ],
      striped: false,
      bordered: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false
    }),

    methods: {

    }
  }
</script>
