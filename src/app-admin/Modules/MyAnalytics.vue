<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon
        :daterange=input.daterange v-on:dateRangeOnUpdate="dateRangeOnUpdate" ></page-title>

        <div class="card mb-3">
            <div class="no-gutters row">
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Unique Conversations</div>
                                            <div class="widget-subheading">Total Session</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success">{{summary.uniqueConversation | number}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Messages Exchanged</div>
                                            <div class="widget-subheading">Total I/O messages</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-primary">{{summary.totalMsgExchanged | number}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Lead Messenger</div>
                                            <div class="widget-subheading">{{summary.leadMessanger.contactType.replace('MESSAGE_','')}}</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-danger">{{summary.leadMessanger.percentage}}<small class="opacity-5">%</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Peak Load</div>
                                            <div class="widget-subheading">20 Jan 1030 to 1100</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-warning">5K</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-12 col-lg-4">
                    <ul class="list-group list-group-flush">
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Start Lag</div>
                                            <div class="widget-subheading">Start Lag</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-success">{{summary.startLag}} <small class="opacity-5"> sec</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="bg-transparent list-group-item">
                            <div class="widget-content p-0">
                                <div class="widget-content-outer">
                                    <div class="widget-content-wrapper">
                                        <div class="widget-content-left">
                                            <div class="widget-heading">Conversation Duration</div>
                                            <div class="widget-subheading">Conversation Duration</div>
                                        </div>
                                        <div class="widget-content-right">
                                            <div class="widget-numbers text-primary">{{summary.converDuration}} <small class="opacity-5"> sec</small></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-success border-success">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5"></small>
                                            <span>{{summary.openConversation | number}}</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">Open Conversations</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-primary border-primary">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5"></small>
                                            <span>530</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">Abandoned</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-warning border-warning">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <small class="opacity-5"></small>
                                            <span>7.5</span></div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">Satisfaction Score</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-3">
                <div
                    class="card mb-3 widget-chart widget-chart2 text-left card-btm-border card-shadow-danger border-danger">
                    <div class="widget-chat-wrapper-outer">
                        <div class="widget-chart-content pt-3 pl-3 pb-1">
                            <div class="widget-chart-flex">
                                <div class="widget-numbers">
                                    <div class="widget-chart-flex">
                                        <div class="fsize-4">
                                            <span>564</span></div>
                                            <small class="opacity-5">%</small>
                                    </div>
                                </div>
                            </div>
                            <h6 class="widget-subheading mb-0 opacity-5">BOT Closure</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-6 col-xl-6" v-for="graph in graphs">
                <b-card :title="graph.title" class="main-card mb-3">
                  <lineeg
                    :cdata="graph.data"
                  ></lineeg>
                </b-card>
            </div>

        </div>


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
            heading: 'Analytics Dashboard',
            subheading: 'Select date range for report',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
            graphs : [
                {
                    title : "Conversations - Cumulative",
                    data : [65, 59, 80, 81, 56, 55, 40] 
                },
                {
                    title : "Conversations - individuals",
                    data : [65, 59, 80, 81, 56, 55, 40] 
                },
                {
                    title : "Messages - Team",
                    data : [65, 59, 80, 81, 56, 55, 40] 
                },
                {
                    title : "Messages - Individuals",
                    data : [65, 59, 80, 81, 56, 55, 40] 
                },
            ],
            stats :  {
                "contactType": {},
                "filter": "string",
                "peakLoad": {
                  "timestamp": 0,
                  "total": 0
                },
                "todayMsgExchanged": 0,
                "totalInMsgExchanged": 0,
                "totalMsgExchanged": 0,
                "totalOutMsgExchanged": 0,
                "uniqueConversation": 0
            },
            input : {
                daterange : {
                    startDate : null,
                    endDate : null,
                }
            },
            summary : {
                agentName: null,
                contactType: {},
                converDuration: 93,
                filter: "DATE_RANGE",
                leadMessanger: {contactType: "MESSAGE_WEBSITE", noOfMessage: 26, totalContactMessage: 27, percentage: 96.3},
                contactType: "MESSAGE_WEBSITE",
                noOfMessage: 26,
                percentage: 96.3,
                totalContactMessage: 27,
                msgCountLst: null,
                openConversation: 874,
                peakLoad: 50000,
                startLag: 5.75,
                totalInMsgExchanged: 0,
                totalMsgExchanged: 31786,
                totalOutMsgExchanged: 0,
                uniqueConversation: 3504560
            }
        }),
        mounted : function (argument) {
          this.dateRangeOnUpdate();
        },
        methods: {
          async loadAnalytics (){
            var resp = await this.$store.dispatch('LoadAnalytics',{
              "agent": "TEAM",
              "contactType": {},
              "dateRange1": this.input.daterange.startDate,
              "dateReange2": this.input.daterange.endDate
            });
            this.summary = resp[5];
          },
          dateRangeOnUpdate : function (r) {
               console.log("dateRangeOnUpdate",r);
               this.input.daterange.startDate = this.input.daterange.startDate.getTime();
               this.input.daterange.endDate = this.input.daterange.endDate.getTime();
               this.loadAnalytics();
          }
        },

    }


</script>
