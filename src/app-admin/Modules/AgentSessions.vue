<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon
        :daterange=input.daterange v-on:dateRangeOnUpdate="dateRangeOnUpdate" ></page-title>


       <b-table id="agent-session-list" :striped=true
                     :bordered=true
                     :outlined=false
                     :small=true
                     :hover=true
                     :dark=false
                     :fixed=false
                     :foot-clone=false
                     :per-page="sessions.perPage"
                     :current-page="sessions.currentPage"
                     :items="sessions.items"
                     :fields="sessions.fields">
                <template #cell(assignedToAgent)="row">
                    <font-awesome-icon v-if="row.item.mode=='BOT'" icon="robot" :style="{ color: 'grey' }" />
                    <font-awesome-icon v-if="row.item.mode=='AGENT'" icon="user" :style="{ color: 'grey' }" />
                    &nbsp;{{ row.item.assignedToAgent}}
                </template>
                <template #cell(contactId)="row">
                    {{ row.item.contactName || row.item.contactId}}
                </template>
                <template #cell(startSessionStamp)="row">
                    {{ row.item.startSessionStamp | formatDate}}
                </template>
                <template #cell(fistResponseStamp)="row">
                    {{ row.item.fistResponseStamp | formatDate}} 
                </template>
                <template #cell(closeSessionStamp)="row">
                    {{ row.item.closeSessionStamp | formatDate}}
                    <font-awesome-icon v-if="row.item.active" icon="circle" :style="{ color: 'green' }" />
                </template>   
                <template #cell(actions)="row">
                  <b-button size="xs" @click="activateAgent(row.item, row.index, $event.target)" variant="outline-primary">
                    {{ row.item.isactive == "Y" ? 'DeActivate' : 'Activate' }} Agent
                  </b-button>
                </template>

        </b-table>

          <b-pagination
              v-model="sessions.currentPage"
              :total-rows="sessions.rows"
              :per-page="sessions.perPage"
              aria-controls="agent-session-list"
            ></b-pagination>

    </div>

</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitleDateRange.vue";
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    //import chart1 from './Analytics/chart1';
    //import chart2 from './Analytics/chart2';
    //import chart3 from './Analytics/chart3';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faTrashAlt,
        faCheck,
        faCalendarAlt,
        faAngleDown,
        faAngleUp,
        faTh,
        faCircle,
        faRobot,faUser
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import lineeg from '../../Modules/Charts/Chartjs/MyLine'

    library.add(
        faTrashAlt,
        faCheck,
        faAngleDown,
        faAngleUp,
        faTh,
        faCalendarAlt,
        faCircle,faRobot,faUser
    );

    export default {
        components: {
            PageTitle,
            VuePerfectScrollbar,
            'font-awesome-icon': FontAwesomeIcon,
           // chart1,chart2,chart3,
            lineeg,
        },
        data: () => ({
            heading: 'Chat Sessions',
            subheading: 'Select date range for report',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
            input : {
                daterange : {
                    startDate : null,
                    endDate : null,
                }
            },
            sessions : {
                fields: [ { key : 'assignedToAgent', label : "Assigned" },{ key : 'contactId', label : "Contact" },
                    { key : 'startSessionStamp', label : "Start@" },
                    { key : 'fistResponseStamp', label : "Agent@" },
                    //{ key : 'lastInComingStamp', label : "lastInComingStamp" },
                    //{ key : 'lastResponseStamp', label : "lastResponseStamp" },
                    { key : 'closeSessionStamp', label : "Closed@" },
                    //{ key : 'actions', label : "Action" }
                ],
                items : [],
                perPage: 25,
                currentPage: 1,
                rows : 0
            },
            input : {
                daterange : {
                    startDate : null,
                    endDate : null,
                }
            }
        }),
        mounted : function (argument) {
          this.dateRangeOnUpdate();
        },
        methods: {
          async getSessions (){
            var resp = await this.$store.dispatch('GetSessions',{
              "agent": "TEAM",
              "contactType": "MESSAGE_TWITTER",
              "startStamp": this.input.daterange.startDate,
              "endStamp": this.input.daterange.endDate
            });
            this.sessions.items = resp.results;
            this.sessions.rows = this.sessions.items.length;
            console.log("sessions",resp,this.sessions )
          },
          dateRangeOnUpdate : function (r) {
               console.log("dateRangeOnUpdate",r);
               this.input.daterange.startDate = this.input.daterange.startDate.getTime();
               this.input.daterange.endDate = this.input.daterange.endDate.getTime();
               this.getSessions();
          }
        },

    }


</script>
